<template>
  <div id="app" 
       v-resize.debounce="handleResizeDebounce">
  
    <header class="header">
      <nav class="inner">
        <ul class="nav">
          <router-link to="/" tag="li" class="logo" exact>
            Home
          </router-link>
          <router-link to="/page-example" tag="li">Page Example</router-link>
        </ul>

        <router-link to="/menu" 
                     tag="div"
                     class="controls-left">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </router-link>

      </nav>
    </header>
 
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>

import resize from 'vue-resize-directive'
// import ComponentExample from './components/ComponentExample'

export default {

  name: 'app',

  components: {
    // 'component-example': ComponentExample
  },

  directives: {
    resize
  },

  mounted () {
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
    }
  }
}
</script>


<style lang="scss">

@import "styles/variables";


</style>
