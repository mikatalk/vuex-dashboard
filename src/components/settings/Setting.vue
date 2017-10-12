<template>
  <div class="setting-row">
    <setting-color-picker v-if="type=='color-picker'" 
                          :value="value" 
                          :action="action" 
                          :label="label"
                          :parentState="parentState" /> 
    <!-- Add new settings here, filter by type -->
  </div>
</template>

<script>

import SettingColorPicker from './SettingColorPicker.vue'

export default {
  name: 'setting-row-color-picker',
  props: ['type', 'value', 'action', 'label', 'parentState'],
  components: {
    'setting-color-picker': SettingColorPicker
  }
}

</script>

<style lang="scss">

.setting-row {
  .backdrop {
    z-index: 98;
  }
  .color-picker {
    z-index: 99;
  }
}
  
</style>
