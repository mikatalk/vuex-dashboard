<template>
  <div class="menu-view">  

    <h1 v-on:click="goBack">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </h1>

    <ul class="nav" v-on:click="goBack">

      <router-link to="/1" tag="li">Menu 1</router-link>
      <router-link to="/2" tag="li">Menu 2</router-link>
      <router-link to="/" tag="li">Menu 3</router-link>
      <router-link to="/1" tag="li">Menu 4</router-link>
      <router-link to="/2" tag="li">Menu 5</router-link>
      <router-link to="/" tag="li">Menu 6</router-link>
      <router-link to="/1" tag="li">Menu 1</router-link>
      <router-link to="/2" tag="li">Menu 2</router-link>
      <router-link to="/" tag="li">Menu 3</router-link>
      <router-link to="/1" tag="li">Menu 4</router-link>
      <router-link to="/2" tag="li">Menu 5</router-link>
      <router-link to="/" tag="li">Menu 6</router-link>
    
    </ul>

  </div>
</template>

<script>
export default {
  name: 'menu-overlay',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    console.log('HERE!')
    window.scroll(250, 0)
  }
}
</script>

<style lang="scss">

@import "../styles/variables";

.menu-view {
  background: $bg;
  overflow: hidden;
  // height: 0rem;
  &.open {
    height: 10rem;
  }

  ul {
    margin: 0;
    list-style: none;
  }
}
</style>
