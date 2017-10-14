<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <ul class="nav">
          <router-link to="/" tag="li" class="logo" exact>
            <img width="75" src="static/mika-i-logo.png" title="Mika I."></i>
            <!-- <i class="fa fa-fw" aria-hidden="true" title=""></i> -->
          </router-link>
          <router-link to="/1" tag="li">Menu 1</router-link>
          <router-link to="/2" tag="li">Menu 2</router-link>
          <router-link to="/" tag="li">Menu 3</router-link>
        </ul>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Group from './components/Group.vue'

export default {
  name: 'app',
  components: {
    'group': Group
  }
}
</script>


<style lang="scss">

@import "styles/variables";


</style>
