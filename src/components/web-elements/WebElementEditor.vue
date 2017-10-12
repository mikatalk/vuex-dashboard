<template>
  <div class="web-element-editor">
    <div class="settings">

      <example-panel :definition="definition" />

    </div>
  </div>
</template>

<script>

import ExamplePanel from './panels/ExamplePanel.vue'

export default {
  name: 'web-element-editor',
  props: ['definition'],
  components: {
    'example-panel': ExamplePanel
  }
}

</script>

<style lang="scss">

.web-element-editor {
  
}
  
</style>
