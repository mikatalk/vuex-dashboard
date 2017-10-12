<template>
  <div class="element-settings-view">
    <template v-if="getElement">
      <label class="heading">{{ getElement.label }}</label>
      <web-element-editor :definition="getElement"/>
      <website-preview :mode="'desktop'" :definition="getElement"/>
    </template>
    <template v-else-if="!getElement">
      <h1>No Definition found for this element.</h1>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import WebElementEditor from '../components/web-elements/WebElementEditor.vue'
import WebsitePreview from '../components/web-elements/WebsitePreview.vue'

export default {
  name: 'element-settings-view',

  components: {
    'web-element-editor': WebElementEditor,
    'website-preview': WebsitePreview
  },

  computed: {

    ...mapGetters([
      'elements'
    ]),

    elementName () {
      return this.$route.params.elementName
    },

    getElement () {
      for (let el of this.elements) {
        if (el.type === this.elementName) {
          return el
        }
      }
      return false
    }
  },
  watch: {
    '$route.params.elementName': function (elementName) {
      this.$store.dispatch('toggleCurrentGroup', null)
    }
  },

  created () {
    this.$store.dispatch('getAllWebElements')
    this.$store.dispatch('toggleCurrentGroup', null)
  }
}
</script>

<style lang="scss" scoped>


.element-settings-view {
  display:flex;
  align-items: center;
  flex-flow: row wrap;
  //flex-wrap: wrap;
  //    justify-content: center;
  //  align-items: center;
  padding: 0 20px;
  width: calc(100% - 40px);
  .heading {
    border-bottom: 1px solid lightgrey;
    font-size: 22px;
    margin: 10px auto;
    padding: 10px;
    display: block;
    width: calc(100% - 40px);
    flex: 0 1 100%;
  }

  .web-element-editor {
    flex:0 1 230px;
    margin: 10px auto;
    width: 230px;
    min-width: 230px;
    align-self: flex-start;
  }

  .website-preview  {
    flex:0 1 auto;
    width: 100%;
    max-width: calc(100% - 250px);
    align-self: flex-start;
  }
    
}
</style>
