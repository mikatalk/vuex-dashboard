const THREE = require('three')
const { deepDispose } = require('./../util/deep-dispose')
import randomcolor from 'randomcolor'

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`

const fragment = `
  uniform float elapsedTime;
  uniform float scrollRatio;
  uniform vec3 color;
  
  varying vec2 vUv;
  
  #define PI 3.14
 
  float circle(vec2 uv, float scale) {
    return length(uv - .5) * 1.0 / scale;
  }

  float rect (vec2 uv, vec2 s) {
    uv = uv * 2.0 - 1.0;
    return max( abs(uv.x / s.x), abs(uv.y / s.y));
  }

  vec2 repeat(vec2 uv, vec2 tiles) {
    return fract(uv * tiles);
  }
  
  vec2 rotate (vec2 uv, float a) {
    uv = mat2(cos(a), -sin(a), sin(a), cos(a)) * (uv - 0.5);
    return uv + 0.5;
  }

  void main() {
    // vec3 color = vec3(.2, .7, .9);
    float alpha = 0.0;
    vec2 uv = vUv;

    // rotate
    // uv = rotate(uv, elapsedTime);

    // repeat
    uv = repeat(uv, vec2(9., 9.));
    // float ratio = cos(scrollRatio * PI);
    float ratio = elapsedTime * (.8 + sin(elapsedTime*0.01) * .1);
    // float ratio = scrollRatio;
    float scale = (0.5 + sin(ratio * PI * 2.0 + length(vec2(1.0)/length(vUv-vec2(.5)))) )/ 2.0;
    // float scale = (0.5 + sin(ratio * PI * 2.0 + length(vec2(1.0)/length(vUv-vec2(.5)+vec2(sin(elapsedTime)*vec2(.2, .14) )))) )/ 2.0;
    // alpha = circle(uv, scale);
    // alpha = circle(uv, 1.-clamp(scale, 0., 1.));
    uv = rotate(uv, elapsedTime * 10.1);
    
    alpha = rect(uv, vec2(clamp(scale, 0., 1.)));
    
    if(alpha < 0.999) {
      discard;
    } else {
      alpha = 1.0;
    } 

    gl_FragColor = clamp(vec4( color, alpha), 0.0, 1.0);
  }
`

export class GLLayer {

  constructor (canvas) {
    this.canvas = canvas
    let width = canvas.width
    let height = canvas.height

    // start up with default mouse pos mid screen
    this.mouseX = this.mouseY = 0.5
    this.previousMouseX = this.previousMouseY = 0.5

    this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -10000, 10000)

    this.scene = new THREE.Scene()

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        elapsedTime: {value: 0},
        scrollRatio: {value: 0},
        color: {value: new THREE.Color(randomcolor())}
        // mouse: {value: new THREE.Vector2(this.mouseX, this.mouseY)},
        // mouseVelocity: {value: new THREE.Vector2(this.previousMouseX, this.previousMouseY)}
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      depthWrite: false,
      transparent: true,
      depthTest: 0.1
    })

    let plane = new THREE.PlaneBufferGeometry(width, height)

    let quad = new THREE.Mesh(plane, this.material)
    this.scene.add(quad)

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      autoClear: false
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    // this.renderer.setClearColor(0xffffff)
    // this.renderer.setClearColor(0x130c25)
    // this.renderer.setClearColor(0xffffff, 0)
    // this.renderer.autoClear = false;
    // this.renderer.setPixelRatio(0.1)
    // this.renderer.setPixelRatio(0.5)
    this.renderer.setPixelRatio(window.devicePixelRatio || 1)

    // document.addEventListener('mousemove', () => this.onDocumentMouseMove(), false)
    // window.addEventListener('resize', this.handleResize.bind(this), false)
  }

  unload () {
    // document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false)

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
    this.canvas.width = 1
    this.canvas.height = 1
  }

  handleMouseMove (position) {
    // // save previous position
    // this.previousMouseX = this.mouseX
    // this.previousMouseY = this.mouseY
    // // save new position
    // this.mouseX = position.x // event.clientX / window.innerWidth
    // this.mouseY = position.y // 1.0 - event.clientY / window.innerHeight
    // // save uniforms
    // // this.materialMouseMap.uniforms.mouse.value.x = this.mouseX
    // // this.materialMouseMap.uniforms.mouse.value.y = this.mouseY
    // // // estimate velocity of movememt
    // // let intensity = 50
    // // let velX = (this.mouseX - this.previousMouseX) * intensity
    // // velX = Math.min(0.5, Math.max(-0.5, velX))
    // // let velY = (this.mouseY - this.previousMouseY) * intensity
    // // velY = Math.min(0.5, Math.max(-0.5, velY))
    // // this.materialMouseMap.uniforms.mouseVelocity.value.x = velX
    // // this.materialMouseMap.uniforms.mouseVelocity.value.y = velY
  }

  handleResize (width, height) {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  update (elapsedTime, scrollRatio) {
    this.renderer.setClearColor(0xffffffff, 0)
    this.renderer.render(this.scene, this.camera)
    this.material.uniforms.elapsedTime.value = elapsedTime * 0.001
    this.material.uniforms.scrollRatio.value = scrollRatio
  }
}
