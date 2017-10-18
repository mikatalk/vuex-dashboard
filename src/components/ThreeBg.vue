ThreeBg.vue
<template>
  <div class="canvas-bg-container" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>

const { GLBg } = require('./../shaders/GLBg')

import { mapGetters } from 'vuex'

export default {
  name: 'three-bg',
  props: ['mode'],

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
    this.glBg = new GLBg(this.$refs.canvas)
    this.running = true
  },

  beforeDestroy () {
    this.glBg.unload()
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

      this.glBg.update(time)
    },

    handleResize () {
      // handle resize
      const width = this.$refs.container.getBoundingClientRect().width
      const height = this.$refs.container.getBoundingClientRect().height
      this.$refs.canvas.width = width
      this.$refs.canvas.height = height

      this.glBg.handleResize(width, height)
    }
  }
}

</script>

<style lang="scss">

@import "../styles/variables";

.canvas-bg-container {
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  position: fixed;
  top: 0; left: 0;
  bottom: 0; right: 0;
  z-index: -1;//9999;

  canvas{
    margin: auto;
    width: 100vw;
    height: 100vh;
  }
}

</style>
