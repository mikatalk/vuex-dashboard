<template>
  <div class="three-view">
    <h1 class="max-width-desktop">ThreeJS Responsive Width Example</h1>
    <div class="container" ref="container">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="max-width-desktop">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
const THREE = require('three')
const { deepDispose } = require('./../util/deep-dispose')
const { Floor } = require('./../shaders/Floor')
import { mapGetters } from 'vuex'

export default {
  name: 'three-view',
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'windowWidth'
    ])
  },

  watch: {
    windowWidth (newWidth, oldWidth) {
      this.handleResize()
    }
  },

  mounted () {
    const canvas = this.$refs.canvas
    const width = canvas.width
    const height = canvas.height
    this.running = true
    this.clock = new THREE.Clock()
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(35, width / height, 1, 20000)
    this.camera.position.set(0, -300, 65)
    this.camera.lookAt(this.scene.position)

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      stencil: false,
      alpha: true
    })
    this.renderer.setClearColor(0, 0)
    this.renderer.setPixelRatio(window.devicePixelRatio || 1)

    this.floor = new Floor()
    this.scene.add(this.floor.mesh)
    this.tick()
    this.handleResize()
  },
  beforeDestroy () {
    this.running = false
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
  },
  methods: {
    tick () {
      if (!this.running) return
      requestAnimationFrame(() => this.tick())
      var time = performance.now()
      this.floor.update(time * 0.007)
      // const elapsed = this.clock.getElapsedTime()
      // this.mesh.rotation.y = elapsed * 50 * THREE.Math.DEG2RAD
      this.renderer.render(this.scene, this.camera)
    },
    handleResize () {
      // handle resize
      const width = this.$refs.container.getBoundingClientRect().width
      const height = this.$refs.container.getBoundingClientRect().height
      this.$refs.canvas.width = width
      this.$refs.canvas.height = height
      this.renderer.setSize(width, height)
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    }
  }
}

</script>

<style lang="scss">

@import "../styles/variables";

.three-view {
  .container {
    overflow: hidden;
    width: 100%;
    height: 220px;
    canvas{
      margin: auto;
      width: 100%;
      height: 220px;
    }
  }
}

</style>
