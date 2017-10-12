<template>
  <div class="global-theme-selector">
    <label class="heading">Theme selector</label>
    <theme-thumbnail v-for="(theme, i) of themes"  
                     :key="theme.id"
                     :styles="theme"/>
                     <!-- @click="selectTheme"/> -->
  </div>
</template>

<script>

import ThemeThumbnail from './ThemeThumbnail.vue'

export default {
  name: 'global-settings-preview',
  props: ['themes'],
  components: {
    'theme-thumbnail': ThemeThumbnail
  }
}

</script>

<style lang="scss">

.global-theme-selector {
  
}

</style>
