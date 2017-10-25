<template>
  <div class="svg-bg-container" ref="container">
    <svg ref="svg" 
         version="1.1" 
         xmlns="http://www.w3.org/2000/svg" 
         xmlns:xlink="http://www.w3.org/1999/xlink" 
         x="0px" 
         y="0px"
         width="100%" 
         height="100%" 
         viewBox="0 0 500 500" 
         preserveAspectRatio="none meet">
    
    <!-- 
      <circle fill="#F7941E" 
              stroke="#231F20" 
              stroke-width="10" 
              cx="250" 
              cy="250" 
              r="200" 
              opacity="0.6" />
    -->
   
      <!-- <polygon points="0 0 500 0 20 500 0 500" -->
      
     <!--  <path :d="path"
               fill="#F7941E" 
               stroke="transparent" 
               stroke-width="0" />    
      -->

        <path :d="path"
              fill="black" 
              stroke="black" 
              stroke-width="2" 
              opacity="1"/>

        <path :d="path2"
              fill="#ffc608" 
              stroke="#ffc608" 
              stroke-width="2" 
              opacity="1" />

      <!-- <path d="M0,0 
               T500,0 
               Q500,100 100,200 
               Q500,200 250,200 
               Q500,300 350,300 
               Q500,400 450,400 
               Q500,500 500,500 
               T500,500
               T0,500"
               fill="#F7941E" 
               stroke="transparent" 
               stroke-width="0" />
 -->
    </svg>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  name: 'svg-bg',
  props: ['mode'],

  data () {
    return {
      path: this.path,
      path2: this.path2
    }
  },

  computed: {
    ...mapGetters([
      // 'windowWidth',
      // 'windowHeight',
      // 'mouse',
      'pageScrollY'
    ])
  },

  mounted () {
    this.running = true
    this.tick()
  },

  beforeDestroy () {
    // this.glBg.unload()
    this.running = false
  },

  methods: {
    tick () {
      if (!this.running) return
      requestAnimationFrame(() => this.tick())
      let time = performance.now() * 0.0005
      let step = 0
      this.path = `M0,0 
               Q${this.makePath(time, step++)},${0 + this.makePath(time, step++)}   ${this.makePath(time, step++)},${25 + this.makePath(time, step++)}
               Q${this.makePath(time, step++)},${50 + this.makePath(time, step++)}  ${this.makePath(time, step++)},${75 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${100 + this.makePath(time, step++)} ${this.makePath(time, step++)},${125 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${150 + this.makePath(time, step++)} ${this.makePath(time, step++)},${175 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${200 + this.makePath(time, step++)} ${this.makePath(time, step++)},${225 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${250 + this.makePath(time, step++)} ${this.makePath(time, step++)},${275 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${300 + this.makePath(time, step++)} ${this.makePath(time, step++)},${325 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${350 + this.makePath(time, step++)} ${this.makePath(time, step++)},${375 + this.makePath(time, step++)} 
               Q${this.makePath(time, step++)},${400 + this.makePath(time, step++)} ${this.makePath(time, step++)},${425 + this.makePath(time, step++)} 
               T${this.makePath(time, step++)},${450 + this.makePath(time, step++)} ${this.makePath(time, step++)},${475 + this.makePath(time, step++)}
               T0,500`
      this.path2 = `M500,0 
               Q${this.makePath2(time, step++)},${0 + this.makePath(time, step++)}   ${this.makePath2(time, step++)},${25 + this.makePath(time, step++)}
               Q${this.makePath2(time, step++)},${50 + this.makePath(time, step++)}  ${this.makePath2(time, step++)},${75 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${100 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${125 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${150 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${175 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${200 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${225 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${250 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${275 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${300 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${325 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${350 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${375 + this.makePath(time, step++)} 
               Q${this.makePath2(time, step++)},${400 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${425 + this.makePath(time, step++)} 
               T${this.makePath2(time, step++)},${450 + this.makePath(time, step++)} ${this.makePath2(time, step++)},${475 + this.makePath(time, step++)}
               T500,500`

      // this.path = `M0,0
      //          T${this.makePath(time, 0)},0
      //          T${this.makePath(time, 1)},50
      //          T${this.makePath(time, 2)},150
      //          T${this.makePath(time, 3)},200
      //          T${this.makePath(time, 4)},250
      //          T${this.makePath(time, 5)},300
      //          T${this.makePath(time, 6)},350
      //          T${this.makePath(time, 7)},400
      //          T${this.makePath(time, 8)},450
      //          T0,500`
      // this.path2 = `M500,0
      //          T${this.makePath2(time, 0)},0
      //          T${this.makePath2(time, 1)},50
      //          T${this.makePath2(time, 2)},150
      //          T${this.makePath2(time, 3)},200
      //          T${this.makePath2(time, 4)},250
      //          T${this.makePath2(time, 5)},300
      //          T${this.makePath2(time, 6)},350
      //          T${this.makePath2(time, 7)},400
      //          T${this.makePath2(time, 8)},450
      //          T500,500`
    },

    // T${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 0) * 250, 2)},0
    //          Q${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 0) * 250, 2)},0
    //           ${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 1) * 250, 2)},200
    //          Q${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 1) * 250, 2)},200
    //           ${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 2) * 250, 2)},300
    //          Q${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 2) * 250, 2)},300
    //           ${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 3) * 250, 2)},400
    //          Q${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 3) * 250, 2)},400
    //           ${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 4) * 250, 2)},500
    //          T${parseFloat(250 - Math.sin(this.pageScrollY * 0.01 + time + 4) * 250, 2)},500

    handleResize () {
      // // handle resize
      // const width = this.$refs.container.getBoundingClientRect().width
      // const height = this.$refs.container.getBoundingClientRect().height
      // this.$refs.svg.width = width
      // this.$refs.svg.height = height
    },

    makePath (time, offset) {
      return parseFloat(5 + Math.sin(this.pageScrollY * 0.02 + time + offset * 4) * 5, 2)
    },
    makePath2 (time, offset) {
      return parseFloat(495 - Math.sin(this.pageScrollY * 0.02 + time + offset * 4) * 5, 2)
    }
    // makePath (time, offset) {
    //   return parseFloat(10 + Math.sin(this.pageScrollY * 0.02 + time + offset) * 10, 2)
    // },
    // makePath2 (time, offset) {
    //   return parseFloat(490 - Math.sin(this.pageScrollY * 0.02 + time + offset + 2) * 10, 2)
    // }
  }
}

</script>

<style lang="scss">

@import "../styles/variables";

.svg-bg-container {
  pointer-events: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  position: fixed;
  top: 0; left: 0;
  bottom: 0; right: 0;
  z-index: -1;
  z-index: 9999;

  svg {
    pointer-events: none;
    margin: auto;
    width: 100vw;
    height: 100vh;
  }
}

</style>
