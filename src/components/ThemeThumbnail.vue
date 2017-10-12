<template>
  <div class="theme-thumbnail" @click="activateTheme">
    <svg viewBox="0 0 120 70" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      <!-- BG -->
      <rect :fill="styles.bodyBackgroundColor"
            stroke-width="0" y="0" x="0" height="170" width="120"/>
      <!-- CONTENT BG -->
      <rect :fill="styles.contentBackgroundColor"
            :stroke="styles.contentBaorderColor"
            height="90" width="91" y="0" x="14" stroke-width="1.5" />
      <!-- Header -->
      <rect :fill="styles.headerBackgroundColor"
            :stroke="styles.headerBorderColor"
            height="21" width="124" y="-4" x="-1" stroke-width="1.5" />
      <!-- Footer -->
      <rect :fill="styles.footerBackgroundColor"
            :stroke="styles.footerBorderColor"
            height="10" width="121" y="60" x="0" stroke-width="1.5"/>
      <!--  -->
      <line :stroke="styles.contentHeadingTextColor"
            stroke-linecap="null" stroke-linejoin="null" y2="26.779667" x2="62" y1="26" x1="20" fill-opacity="null" stroke-opacity="null" stroke-width="4" fill="none"/>
      <line :stroke="styles.contentMainTextColor"
            stroke-linecap="null" stroke-linejoin="null" y2="36" x2="96" y1="36" x1="19" fill-opacity="null" stroke-opacity="null" stroke-width="3" fill="none"/>
      <line :stroke="styles.contentMainTextColor"
            stroke-linecap="null" stroke-linejoin="null" y2="45" x2="96" y1="45" x1="19" fill-opacity="null" stroke-opacity="null" stroke-width="3" fill="none"/>
      <line :stroke="styles.contentMainTextColor"
            stroke-linecap="null" stroke-linejoin="null" y2="53" x2="96" y1="53" x1="19" fill-opacity="null" stroke-opacity="null" stroke-width="3" fill="none"/>
      <!-- NAV BUTTONS -->
      <line :stroke="styles.navTextColor.default"
            stroke-linecap="null" stroke-linejoin="null" id="svg_10" y2="8.983057" x2="25.468219" y1="8.983057" x1="7.66949" fill-opacity="null" stroke-opacity="null" stroke-width="4" fill="none"/>
      <line :stroke="styles.navTextColor.active"
            stroke-linecap="null" stroke-linejoin="null" id="svg_11" y2="8.983057" x2="50.891947" y1="8.983057" x1="33.093218" fill-opacity="null" stroke-opacity="null" stroke-width="4" fill="none"/>
    </svg>
  </div>
</template>

<script>

export default {

  name: 'theme-thumbnail',
  props: ['styles'],

  methods: {
    activateTheme (event) {
      this.$store.dispatch('activateTheme', this.styles)
    }
  }
}

</script>

<style lang="scss">

.theme-thumbnail {
  cursor: pointer;
  width: 120px;
  height: 70px;
  margin: 5px;
  display: block;
  float: left;
   box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, .4);
}

</style>
