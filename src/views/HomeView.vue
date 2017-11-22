<template>
  <div class="home-view max-width-desktop">
  </div>
</template>

<script>
export default {
  name: 'home-view'
}
</script>

<style lang="scss">
body {
    background: #fafafa;
}
header {
    display: none;
}
#app .view.max-width-desktop, #app .view.home-view {
  padding-right: 14vw;
  padding-left: 14vw;
  height: 1000vh;
}
</style>
