const THREE = require('three')
const { deepDispose } = require('./../util/deep-dispose')

/******************************
 - PASS 1 - mouse map
 create mouse map of position and velocity
 - PASS 2 - ping pong
 apply new mouse map to previous frame buffer
 save buffer onto current frame
 - PASS 3 - Final to screen
 copy current frame to screen
 toggle current/previous refs
******************************/

// PASS 1 - Mouse Map
const vertexMouseMap = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`
const fragmentMouseMap = `
  uniform vec2 mouse;
  uniform vec2 mouseVelocity;
  varying vec2 vUv;
  void main() {
    vec3 color = vec3(0.0, 0.0, 0.0);
    float alpha = 1.0 - distance(vUv.xy, mouse.xy) * 6.0;
    color.r += alpha;
    color.g += (.5 + mouseVelocity.x) * alpha;
    color.b += (.5 + mouseVelocity.y) * alpha;
    color = clamp(vec3(0.0), vec3(1.0), color);
    gl_FragColor = vec4(color, alpha);
  }
`

// PASS 2 - Ping Pong
const vertexPingPong = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`
const fragmentPingPong = `
  varying vec2 vUv;
  uniform float elapsedTime;
  uniform sampler2D mouseMap;
  uniform sampler2D previousFrame;
  // uniform float time;
  void main() {
    vec4 color = vec4(0.0);
    color += texture2D( mouseMap, vUv );
    color += texture2D( previousFrame, vUv ) - elapsedTime;
    color = clamp(vec4(0.0), vec4(1.0), color);
    gl_FragColor = color;
  }
`

// PASS 3 - FINAL - simply copy the latest rtt to screen buffer
const vertexFinalScreen = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`
const fragmentFinalScreen = `
  varying vec2 vUv;
  uniform sampler2D merged;
  void main() {
    // gl_FragColor = mix( texture2D( texturePrevious, vUv ), texture2D( textureCurrent, vUv ), .25);
    gl_FragColor = texture2D( merged, vUv );
    // gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
  }
`

export class GLBg {

  constructor (canvas) {
    this.canvas = canvas
    let width = canvas.width
    let height = canvas.height

    // start up with default mouse pos mid screen
    this.mouseX = this.mouseY = 0.5
    this.previousMouseX = this.previousMouseY = 0.5

    this.halfWidth = window.innerWidth / 2
    this.halfHeight = window.innerHeight / 2

    this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -10000, 10000)

    this.sceneMouseMap = new THREE.Scene()
    this.scenePingPong = new THREE.Scene()
    this.sceneFinalScreen = new THREE.Scene()

    // create a mouse position with velocity map on Green & Blue channels (velX, velY) => (g,b)
    this.rtTextureMouseMap = new THREE.WebGLRenderTarget(width, height, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat})
    this.materialMouseMap = new THREE.ShaderMaterial({
      uniforms: {
        mouse: {value: new THREE.Vector2(this.mouseX, this.mouseY)},
        mouseVelocity: {value: new THREE.Vector2(this.previousMouseX, this.previousMouseY)}
      },
      vertexShader: vertexMouseMap,
      fragmentShader: fragmentMouseMap,
      depthWrite: false
    })

    // two textures for one RTT material, toggle on each frame
    this.rtTextureA = new THREE.WebGLRenderTarget(width, height, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat})
    this.rtTextureB = new THREE.WebGLRenderTarget(width, height, {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat})
    this.materialPingPong = new THREE.ShaderMaterial({
      uniforms: {
        mouseMap: {value: this.rtTextureMouseMap.texture},
        previousFrame: {value: null},
        elapsedTime: {type: '1f', value: 0}
      },
      vertexShader: vertexPingPong,
      fragmentShader: fragmentPingPong,
      depthWrite: false
    })
    this.pingPongToggle = true // one toggle forthe ping pong process

    // one final material for merging current/previous
    this.materialFinalScreen = new THREE.ShaderMaterial({
      uniforms: {
        merged: {value: null} // pingpong rttA/rttB
      },
      vertexShader: vertexFinalScreen,
      fragmentShader: fragmentFinalScreen,
      depthWrite: false
    })

    let plane = new THREE.PlaneBufferGeometry(width, height)

    let quad = new THREE.Mesh(plane, this.materialMouseMap)
    this.sceneMouseMap.add(quad)

    quad = new THREE.Mesh(plane, this.materialPingPong)
    this.scenePingPong.add(quad)

    quad = new THREE.Mesh(plane, this.materialFinalScreen)
    this.sceneFinalScreen.add(quad)

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      // antialias: true,
      transparent: true,
      autoClear: false
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    // this.renderer.setClearColor(0xffffff);
    // this.renderer.setClearColor(0x130c25);
    // this.renderer.setClearColor(0);
    // this.renderer.autoClear = false;
    this.renderer.setPixelRatio(0.25)
    // this.renderer.setPixelRatio(1)
    // this.renderer.setPixelRatio(window.devicePixelRatio || 1)

    document.addEventListener('mousemove', () => this.onDocumentMouseMove(), false)
    // window.addEventListener('resize', this.handleResize.bind(this), false)
  }

  unload () {
    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false)

    while (this.scene.children.length > 0) {
      const object = this.scene.children[this.scene.children.length - 1]
      deepDispose(object)
      this.scene.remove(object)
    }
    this.renderer.dispose()
    this.renderer.forceContextLoss()
    this.renderer.context = undefined
    this.renderer.domElement = undefined
    // until next garbage collection
    this.$refs.canvas.width = 1
    this.$refs.canvas.height = 1
  }

  onDocumentMouseMove (event) {
    // save previous position
    this.previousMouseX = this.mouseX
    this.previousMouseY = this.mouseY
    // save new position
    this.mouseX = event.clientX / window.innerWidth
    this.mouseY = 1.0 - event.clientY / window.innerHeight
    // save uniforms
    this.materialMouseMap.uniforms.mouse.value.x = this.mouseX
    this.materialMouseMap.uniforms.mouse.value.y = this.mouseY
    // estimate velocity of movememt
    let intensity = 50
    let velX = (this.mouseX - this.previousMouseX) * intensity
    velX = Math.min(0.5, Math.max(-0.5, velX))
    let velY = (this.mouseY - this.previousMouseY) * intensity
    velY = Math.min(0.5, Math.max(-0.5, velY))
    this.materialMouseMap.uniforms.mouseVelocity.value.x = velX
    this.materialMouseMap.uniforms.mouseVelocity.value.y = velY
  }

  handleResize (width, height) {
    this.halfWidth = width / 2
    this.halfHeight = height / 2

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  update (elapsedTime) {
    // requestAnimationFrame(this.animate.bind(this));

    // PASS 1
    this.renderer.render(this.sceneMouseMap, this.camera, this.rtTextureMouseMap, true)

    // PASS 2
    this.materialPingPong.uniforms.previousFrame.value = this.pingPongToggle ? this.rtTextureA.texture : this.rtTextureB.texture
    this.renderer.render(this.scenePingPong, this.camera, !this.pingPongToggle ? this.rtTextureA : this.rtTextureB, true)
    this.pingPongToggle = !this.pingPongToggle

    // PASS 3
    this.materialFinalScreen.uniforms.merged.value = this.pingPongToggle ? this.rtTextureA.texture : this.rtTextureB.texture
    this.renderer.render(this.sceneFinalScreen, this.camera)

    this.materialPingPong.uniforms.elapsedTime.value = elapsedTime * 0.000001
  }
}
