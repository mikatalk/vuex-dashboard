<template>
  <div class="setting-row setting-row-color-picker">
    <span class="label" 
          @click="showPicker = !showPicker">{{label}}</span>
    <span class="color-preview" 
          @click="showPicker = !showPicker" 
          v-bind:style="{ background:value }"></span>
    <div class="backdrop"
         v-if="showPicker"
         @click="showPicker = !showPicker"></div>
    <transition name="fade" mode="out-in">
      <color-picker class="color-picker"
                    v-if="showPicker" 
                    :value="value"
                    @input="updateValue"/>
    </transition>
  </div>
</template>

<script>

import { Chrome } from 'vue-color'

export default {
  name: 'setting-row-color-picker',
  props: ['value', 'action', 'label', 'parentState'],
  components: {
    'color-picker': Chrome
  },
  data () {
    return {
      showPicker: false
    }
  },
  methods: {
    updateValue (color) {
      this.$store.dispatch(this.action, { value: color.hex, scope: this.parentState })
    }
  }
}

</script>

<style lang="scss">

.setting-row-color-picker {
  .backdrop {
    z-index: 98;
  }
  .color-picker {
    z-index: 99;
  }
}
  
</style>
