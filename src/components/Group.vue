<template>
  <div class="group"
       :class="{ expanded: isExpanded }">

    <div class="header" @click="toggleState">
      <slot name="header"></slot>
    </div>

    <div class="content" 
         :style="{ 
           'opacity': isExpanded ? '1':'0',
           'max-height': isExpanded ? maxHeight+'px':'0px',
           overflow: isExpanded ? 'visible':'hidden'
         }">
      <slot name="content"></slot>
    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'group',
  props: {
    maxHeight: {
      default: 500,
      type: Number
    }
  },
  data () {
    return {
      id: '' + this._uid
    }
  },
  computed: {
    ...mapGetters([
      'currentOpenGroup'
    ]),

    isExpanded () {
      return this.currentOpenGroup === this.id
    }
  },
  methods: {
    toggleState () {
      console.log('ID:', this.id)
      this.$store.dispatch('toggleCurrentGroup', this.id)
    }
  }
}

</script>

<style lang="scss" scoped>


.group {
  > div {
    &.header {
      cursor: pointer;
      label {
        cursor: pointer;
      }
    }
    &.content {
      transition: all 500ms ease; 
    
    }

  }
}
  
</style>
