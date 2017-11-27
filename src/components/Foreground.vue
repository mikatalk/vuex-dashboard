<template>
  <div class="canvas-foreground-container" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>

const { GLLayer } = require('./../shaders/GLLayer')
import { mapGetters } from 'vuex'

export default {

  name: 'foreground',

  computed: {
    ...mapGetters([
      'windowWidth',
      'windowHeight',
      'mouse',
      'pageScrollY',
      'pageScrollRatio'
    ])
  },

  watch: {
    pageScrollRatio (newValue, oldValue) {
      // let numTimes = 1
      // let variation = 0.3 + (1 + Math.sin(Math.PI / 2 + this.pageScrollRatio * numTimes * Math.PI * 2)) / 2
    },
    windowWidth (newWidth, oldWidth) {
      this.handleResize()
    },
    windowHeight (newHeight, oldHeight) {
      this.handleResize()
    },
    mouse (newMouse, oldMouse) {
      this.gl.handleMouseMove(newMouse)
    }
  },

  mounted () {
    this.gl = new GLLayer(this.$refs.canvas)
    this.running = true
    this.tick()
  },

  beforeDestroy () {
    this.gl.unload()
    this.running = false
  },

  methods: {
    tick () {
      if (!this.running) return
      requestAnimationFrame(() => this.tick())
      let time = performance.now()
      // // this.floor.update(time * 0.007)
      // this.mesh.material.uniforms.time.value = time

      // // const elapsed = this.clock.getElapsedTime()
      // // this.mesh.rotation.y = elapsed * 50 * THREE.Math.DEG2RAD
      // this.renderer.render(this.scene, this.camera)

      // this.gl.update(time, Math.sin((this.pageScrollRatio * 5) % 1 * Math.PI))
      this.gl.update(time, this.pageScrollRatio)
    },

    handleResize () {
      // handle resize
      const width = this.$refs.container.getBoundingClientRect().width
      const height = this.$refs.container.getBoundingClientRect().height
      this.$refs.canvas.width = width
      this.$refs.canvas.height = height

      this.gl.handleResize(width, height)
    }
  }
}

</script>

<style lang="scss">

@import "../styles/variables";

.canvas-foreground-container {
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  position: fixed;
  top: 0; left: 0;
  bottom: 0; right: 0;
  z-index: -1;
//  z-index: 9999;
  canvas{
    margin: auto;
    width: 100vw;
    height: 100vh;
  }
}

</style>

