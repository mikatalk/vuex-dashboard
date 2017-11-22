const THREE = require('three')
const { deepDispose } = require('./../util/deep-dispose')

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

  // uniform vec2 elapsed;
  // uniform vec2 mouse;
  // uniform vec2 mouseVelocity;
  
  varying vec2 vUv;
  
  #define PI 3.14
  #define TAU 6.28
  
  float stroke(float x, float s, float w) {
    float d = step(s, x + w * 0.5) - step(s, x - w * 0.5);
    return clamp(d, 0., 1.);
  }
  
  float circle(vec2 uv) {
    return length(uv - .5) * 2.0;
  }
  
  float fill (float x, float size) {
    return 1.0 - step(size, x);
  }

  float rect (vec2 uv, vec2 s) {
    uv = uv * 2.0 - 1.0;
    return max( abs(uv.x / s.x), abs(uv.y / s.y));
  }

  float flip (float v, float pct) {
    return mix(v, 1.0 - v, pct);
  }

  float star (vec2 uv, int V, float s) {
    uv = uv * 4.0 - 2.0;
    float a = atan(uv.y, uv.x) / TAU;
    float seg = a * float(V);
    a = ((floor(seg) + 0.5) / float(V) + mix(s, -s, step(.5, fract(seg)))) * TAU;
    return abs(dot(vec2(cos(a), sin(a)), uv));
  }

  float ray (vec2 uv, int N) {
    uv -= 0.5;
    return fract(atan(uv.y, uv.x) / TAU * float(N));
  }

  float tray (vec2 uv, int N) {
    // uv -= 0.5;
    uv += 1.5 + 1.5 * sin(elapsedTime);
    return fract(atan(sin(uv.y*PI), sin(uv.x*PI)) / TAU * float(N));
  }

  float tray2 (vec2 uv, float n) {
    uv -= 0.5;
    return fract(atan(uv.y, uv.x) / TAU * n);
  }
  //   // uv -= 0.5;
  //   uv += 1.5 + 1.5 * sin(elapsedTime);
  //   return fract(atan(sin(uv.y*PI), sin(uv.x*PI)) / TAU * n);
  // }

  vec2 rotate (vec2 uv, float a) {
    uv = mat2(cos(a), -sin(a), sin(a), cos(a)) * (uv - 0.5);
    return uv + 0.5;
  }


float box(vec2 _st, vec2 _size){
    _size = vec2(0.5)-_size*0.5;
    vec2 uv = smoothstep(_size,_size+vec2(1e-4),_st);
    uv *= smoothstep(_size,_size+vec2(1e-4),vec2(1.0)-_st);
    return uv.x*uv.y;
}

float doLines(vec2 vUv, float angle, float zoom, float size) {
  vec2 uv = vUv;
  
  uv = rotate(uv, angle);
  uv.x *= zoom;
  uv.x += step(1., mod(uv.y,2.0));
  uv = fract(uv);
  return box(uv,vec2(size, 1.0));
}


  void main() {
    vec3 color = vec3(0.0, 0.0, 0.0);
    float alpha = 1.0;
    // vec2 uv = vUv;

// tile

// uv = rotate(uv, elapsedTime*0.1);
color.r += doLines(vUv+vec2(scrollRatio, -scrollRatio), radians(90.0)+scrollRatio*PI, 10.0, .33);
color.r += doLines(vUv-vec2(scrollRatio, -scrollRatio), radians(0.0)-scrollRatio*PI, 10.0, .33);

color.g += doLines(vUv+vec2(-scrollRatio, scrollRatio), radians(30.0)+scrollRatio*PI, 10.0, .33);
color.g += doLines(vUv-vec2(-scrollRatio, scrollRatio), radians(-30.0)-scrollRatio*PI, 10.0, .33);

color.b += doLines(vUv+vec2(-scrollRatio, scrollRatio), radians(60.0)+scrollRatio*PI, 10.0, .33);
color.b += doLines(vUv-vec2(scrollRatio, -scrollRatio), radians(-60.0)-scrollRatio*PI, 10.0, .33);

// color. += doLines(vUv, radians(135.0), 10.0, 0.1);


color *= vec3(fill(rect(vUv, vec2(scrollRatio*.5+.6)), 1.));

color += vec3(fill(rect(vUv, vec2(scrollRatio-.01)), 1.));
color = clamp(color, 0.0, 1.0);



gl_FragColor = vec4( color, length(color));







// uv = rotate(uv, elapsedTime*0.001);
// // color += stroke(ray(uv, int(1000.0 * scrollRatio/10.0)*10), .5, .5);
// color = rect(uv,vec2(.25));
// // color = max(color, rect(uv,vec2(.5)));

// float outer = rect(uv.xy, vec2(.9));
// color *= step(0.7, outer);


// color = max(color, fill(rect(uv, vec2(.9)), 1.0));
// color = max(color, fill(rect(uv, vec2(.4)), .5));


// color = fill(rect(uv, vec2(.4)), .5);
// color = max(color, fill(rect(uv, vec2(.4)), .5));
/*
color.r += stroke(tray2(uv, ( 100.0 * scrollRatio)), .5, .1);
color.g += stroke(tray2(uv, ( 100.0 * scrollRatio+.05)), .5, .1);
color.b += stroke(tray2(uv, ( 100.0 * scrollRatio+.1)), .5, .1);

// uv = rotate(uv, radians(-5.0));// - 0.08;
// uv = rotate(uv, elapsedTime);
color += stroke(ray(uv, 8), .5, .15);
float inner = star(uv.xy, 6, .09);
float outer = star(uv.yx, 6, .09);
color *= step(0.7, outer);
color += fill(outer, 0.5);
color -= stroke(inner, 0.25, 0.06);
color += stroke(outer, 0.6, 0.05);

color *= vec3(fill(rect(uv, vec2(.7)), 1.));

color -= vec3(fill(rect(uv, vec2(.6)), 1.));
color = clamp(color, 0.0, 1.0);
    gl_FragColor = vec4( 1.0 -color, length(color.rgb));

 */


    // gl_FragColor = vec4(0.);
    // gl_FragColor = vec4( 1.0 -color, length(color.rgb));
    // gl_FragColor = vec4(vec3(1.0 - color.rrr), color.r);
    // gl_FragColor = vec4(vec3(1.0), alpha * scrollRatio);
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
        scrollRatio: {value: 0}
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
    // this.renderer.setPixelRatio(window.devicePixelRatio || 1)

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
