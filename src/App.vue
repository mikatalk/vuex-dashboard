<template>
  <div id="app" v-resize.debounce="handleResizeDebounce">
    
    <header class="header">
      <nav class="inner">

        <ul class="nav">
          <router-link to="/" tag="li" class="logo" exact>
            <svg viewBox="0 0 150 100"
                 width="75"
                 v-bind:style="{
                  margin: (invertedScrollRatio*2).toFixed(2)+'vh',
                  width:logoHeight}">
              <polygon points="0,0 50,50, 0,50" style="fill:black;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <polygon points="100,0 50,50, 100,50" style="fill:black;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <polygon points="100,0 150,0, 100,50" style="fill:#ffc708;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
              <polygon points="100,50 100,100, 150,100" style="fill:#ffc708;stroke:none;stroke-width:0;fill-rule:nonzero;"/>
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

        <div class="controls-left" v-bind:class="{'top-scroll-mobile': pageScrollY < 20 }">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

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

export default {

  name: 'app',

  directives: {
    resize
  },

  computed: {
    ...mapGetters([
      'pageScrollY',
      'windowWidth'
    ]),

    scrollRatio () {
      return this.pageScrollY / this.windowWidth
    },

    invertedScrollRatio () {
      // match break point in _layout.scss
      if (this.windowWidth > 1 && this.windowWidth > 600) {
        return 0
      }
      return 1 - Math.min(1, this.scrollRatio * 2)
    },

    logoHeight () {
      let ratio = this.invertedScrollRatio
      return ratio * Math.sin(ratio) * 150 + 75
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll, {passive: true})
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
      let ws = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      this.$store.dispatch('updateWindowSize', ws)
    }
  }

}
</script>


<style lang="scss">

@import "styles/variables";


</style>
