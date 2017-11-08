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


  <defs>
    <mask id="myMask" maskUnits="userSpaceOnUse"
        x="0" y="0" width="500" height="500">
        <!-- <circle fill="white" 
              cx="250" 
              cy="250" 
              :r="radius" />
 -->
              <path :d="pathStar"
              fill="white" 
              stroke="transparent" 
              stroke-width="0" 
              opacity="1" />
    </mask>

  </defs>
    
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
<g mask="url(#myMask)" >

      <rect x="0" y="0" width="500" height="500" fill="black"/>

 <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle"
         style="font-size: 120px;
             stroke: #ffc608; 
             fill: #ffffff;"
         opacity="1" >Title</text>    

        <path :d="pathTop"
              fill="#ffc608" 
              stroke="#ffc608" 
              stroke-width="2" 
              opacity="1"/>

        <path :d="pathRight"
              fill="#ffc608" 
              stroke="#ffc608" 
              stroke-width="2" 
              opacity="1" />

        <path :d="pathBottom"
              fill="#ffc608" 
              stroke="#ffc608" 
              stroke-width="2" 
              opacity="1"/>

        <path :d="pathLeft"
              fill="#ffc608" 
              stroke="#ffc608" 
              stroke-width="2" 
              opacity="1" />

       

<!-- 
   <text :x="offset" :y="offset" alignment-baseline="middle" text-anchor="start"
         style="font-size: 120px;
             stroke: #ffc608; 
             fill: #ff0000;"
         opacity=".5" >{{parseInt(pageScrollRatio*100)}}%</text>    
 
   <text :x="offsetInverted" :y="offsetInverted" alignment-baseline="middle" text-anchor="start"
         style="font-size: 120px;
             stroke: #ffc608; 
             fill: #00ff00;"
         opacity=".5" >{{parseInt(pageScrollRatio*100)}}%</text>    

   <text :x="offset" :y="offsetInverted" alignment-baseline="middle" text-anchor="start"
         style="font-size: 120px;
             stroke: #ffc608; 
             fill: #0000ff;"
         opacity=".5" >{{parseInt(pageScrollRatio*100)}}%</text>    

   <text :x="offsetInverted" :y="offset" alignment-baseline="middle" text-anchor="start"
         style="font-size: 120px;
             stroke: #ffc608; 
             fill: #ffffff;"
         opacity="1" >{{parseInt(pageScrollRatio*100)}}%</text>    
 -->
<!--  <path d="M0,0 C500,0,500,335,100,300"
 -->
</g>

 <!-- <path d="M0,0 L50,100 L100,0 L150,100 L200,0 L250,100 L300,0 L350,100 L400,0 L450,100 L500,0" -->
 


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
      pathTop: this.pathTop,
      pathRight: this.pathRight,
      pathBottom: this.pathBottom,
      pathLeft: this.pathLeft,
      offset: this.offset,
      offsetInverted: this.offsetInverted,
      radius: this.radius,
      pathStar: this.pathStar
    }
  },

  computed: {
    ...mapGetters([
      // 'windowWidth',
      // 'windowHeight',
      // 'mouse',
      'pageScrollY',
      'pageScrollRatio'
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

  watch: {
    pageScrollRatio (newValue, oldValue) {
      let numTimes = 1
      let variation = 0.3 + (1 + Math.sin(Math.PI / 2 + this.pageScrollRatio * numTimes * Math.PI * 2)) / 2

      // this.offset = (25 + 50 * Math.cos(this.pageScrollRatio + 2)) + '%'
      // this.offsetInverted = (90 - 50 * Math.cos(this.pageScrollRatio + 2)) + '%'

      this.radius = (1 - variation) * 500

      let val = parseInt(250 * variation)
      this.pathLeft = `M0,0 T500,0 Q${val},${val} ${val},250 T500,500 T0,500`
      this.pathTop = `M0,0 T0,500 Q${val},${val} 250,${val} T500,500 T500,0`
      this.pathRight = `M500,0 T0,0 Q${500 - val},${val} ${500 - val},250 T0,500 T500,500`
      this.pathBottom = `M0,500 T0,0 Q${val},${500 - val} 250,${500 - val} T500,0 T500,500`

      this.pathStar = ''
      for (var i = 0, l = 20; i < l; i++) {
        let radius = 500 * variation
        let x = 250 + radius * Math.cos(i / l * Math.PI * 2)
        let y = 250 + radius * Math.sin(i / l * Math.PI * 2)
        if (i === 0) {
          this.pathStar += `M${parseInt(x)},${parseInt(y)} `
        } else {
          this.pathStar += `L${parseInt(x)},${parseInt(y)} `
        }

        radius = 1000
        x = 250 + radius * Math.cos((i + 0.5) / l * Math.PI * 2)
        y = 250 + radius * Math.sin((i + 0.5) / l * Math.PI * 2)
        this.pathStar += `L${parseInt(x)},${parseInt(y)} `
      }

      // this.offset = (25 + 50 * Math.cos(this.pageScrollRatio + 2)) + '%'
      // this.offsetInverted = (90 - 50 * Math.cos(this.pageScrollRatio + 2)) + '%'

      // this.radius = (1 - this.pageScrollRatio) * 1000

      // let val = 250 * this.pageScrollRatio
      // this.pathLeft = `M0,0 T500,0 Q${val},${val} ${val},250 T500,500 T0,500`
      // this.pathTop = `M0,0 T0,500 Q${val},${val} 250,${val} T500,500 T500,0`
      // this.pathRight = `M500,0 T0,0 Q${500 - val},${val} ${500 - val},250 T0,500 T500,500`
      // this.pathBottom = `M0,500 T0,0 Q${val},${500 - val} 250,${500 - val} T500,0 T500,500`
    }
  },

  methods: {
    tick () {
      if (!this.running) return
      requestAnimationFrame(() => this.tick())
      // let time = performance.now() * 0.0005
      // let step = 0
      // let val = parseInt(-500 + Math.cos(this.pageScrollY * 0.01) * 1000)
      // console.log(this.pageScrollRatio)
      // let val = 250 * (this.pageScrollRatio || 0) // this.windowHeight / this.pageScrollY // parseInt(-500 + Math.cos(this.pageScrollY * 0.01) * 1000)
      // // let val2 = val * 2
      // // this.pathLeft = `M0,0 Q${val},50 ${val},250 T0,500`
      // // this.pathTop = `M0,0 Q50,${val} 250,${val} T500,0`
      // // this.pathRight = `M500,0 Q${500 - val},50 ${500 - val},250 T500,500`
      // // this.pathBottom = `M0,500 Q50,${500 - val} 250,${500 - val} T500,500`

      // this.pathLeft = `M0,0 T500,0 Q${val},${val} ${val},250 T500,500 T0,500`
      // this.pathTop = `M0,0 T0,500 Q${val},${val} 250,${val} T500,500 T500,0`
      // this.pathRight = `M500,0 T0,0 Q${500 - val},${val} ${500 - val},250 T0,500 T500,500`
      // this.pathBottom = `M0,500 T0,0 Q${val},${500 - val} 250,${500 - val} T500,0 T500,500`

      // this.pathTop = `M0,0 T0,500 Q0,${val} 250,${val} T500,500 T500,0`
      // this.pathRight = `M500,0 T250,0 Q${500 - val},0 ${500 - val},250 T250,500 T500,500`
      // this.pathBottom = `M0,500 T0,0 Q0,${500 - val} 250,${500 - val} T500,0 T500,500`
    }
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
  // z-index: 9;

  svg {
    pointer-events: none;
    margin: auto;
    width: 100vw;
    height: 100vh;
  }
}

</style>
