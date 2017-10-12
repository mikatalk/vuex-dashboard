<template>
  <div class="panel example-panel">

    <div v-for="(group, i) in definition.groups" :v-key="i">
      <group :maxHeight="group.settings.length * 30">
        <label slot="header">{{ group.label }}</label>
        <div slot="content">
        <setting v-for="(setting, j) in group.settings"
                 :key="j"
                 :type="'color-picker'"
                 :label="definition.settings[setting].label"
                 :value="definition.settings[setting].value"
                 :action="'updateElementSetting'"
                 :parentState="definition.settings[setting]"/>
        </div>
      </group>
    </div>

  </div>
</template>

<script>

import Setting from './../../settings/Setting.vue'
import Group from './../../Group.vue'

export default {
  name: 'example-panel',
  props: ['definition'],
  components: {
    'setting': Setting,
    'group': Group
  }
}

</script>

<style lang="scss" scoped>

.example-panel {

}
  
</style>
