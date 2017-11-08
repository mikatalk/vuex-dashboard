<template>
  <div id="app" 
       v-resize.debounce="handleResizeDebounce"
       v-on:mousemove="handleMouseMove"
       v:class="{ minify-head: true }">
    
    <!-- <three-bg mode="'test'"></three-bg> -->
    <svg-bg mode="'test'"></svg-bg>
    
    <header class="header">
      <nav class="inner">

        <ul class="nav">
          <router-link to="/" tag="li" class="logo" exact>
            <svg viewBox="0 0 75 50"
                 width="75"
                 v-bind:style="{
                  margin: (invertedScrollRatio).toFixed(2)+'rem',
                  width:logoHeight}">
              <polygon points="0,0 25,25, 0,25" style="fill:black;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <polygon points="50,0 25,25, 50,25" style="fill:black;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <polygon points="50,0 75,0, 50,25" style="fill:#ffc708;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <polygon points="50,25 50,50, 75,50" style="fill:#ffc708;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <img v-bind:style="{margin: (invertedScrollRatio*25).toFixed(2)+'rem'}"
                   :width="logoHeight" src="static/mika-i-logo.png" 
                   alt="Mika I. - logo"
                   title="Mika I." />
            </svg>
          </router-link>
          <router-link to="/1" tag="li">Menu 1</router-link>
          <router-link to="/2" tag="li">Menu 2</router-link>
          <router-link to="/" tag="li">Menu 3</router-link>
        </ul>

        <router-link to="/menu" 
                     tag="div"
                     class="controls-left" 
                     v-bind:class="{'top-scroll-mobile': pageScrollY < 20 }">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </router-link>

        <div class="controls-right" v-bind:class="{'top-scroll-mobile': pageScrollY < 20 }">
          <i class="fa fa-github-alt" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </div>

      </nav>
    </header>
 
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import resize from 'vue-resize-directive'
import ThreeBg from './components/ThreeBg'
import SVGBg from './components/SVGBg'

export default {

  name: 'app',

  components: {
    'three-bg': ThreeBg,
    'svg-bg': SVGBg
  },

  directives: {
    resize
  },

  computed: {
    ...mapGetters([
      'pageScrollY',
      'windowWidth',
      'menuOverlayOpened'
    ]),

    scrollRatio () {
      return this.pageScrollY / this.windowWidth
    },

    invertedScrollRatio () {
      // match break point in _layout.scss
      if (this.windowWidth > 600) {
        return 0
      }
      return 1 - Math.min(1, this.scrollRatio * 2)
    },

    logoHeight () {
      let ratio = this.invertedScrollRatio
      return ratio * Math.sin(ratio) * 150 + 75
    }
  },

  mounted () {
  // created () {
  // beforeCreate () {
    window.addEventListener('scroll', this.handleScroll, {passive: true})
    this.handleResizeDebounce()
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      this.$store.dispatch('updatePageScrollY', window.scrollY)
    },
    handleResizeDebounce () {
      this.$store.dispatch('updatePageScrollY', window.scrollY)
      let size = {
        width: window.innerWidth,
        height: window.innerHeight,
        pageHeight: document.documentElement.scrollHeight
      }
      this.$store.dispatch('updateWindowSize', size)
    },
    handleMouseMove () {
      let position = {
        x: event.clientX / window.innerWidth,
        y: 1 - event.clientY / window.innerHeight
      }
      this.$store.dispatch('updateMousePosition', position)
    },
    toggleMenuOverlay () {
      this.$router.go(-1)
    }
  }
}
</script>


<style lang="scss">

@import "styles/variables";


</style>
