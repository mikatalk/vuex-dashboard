<template>
  <div class="global-settings-view">
    <label class="heading">Global Settings</label>
    <global-settings-panel :styles="styles"></global-settings-panel>
    
    <global-settings-preview :styles="styles"></global-settings-preview>

    <global-theme-selector :themes="themes"></global-theme-selector>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GlobalSettingsPanel from '../components/GlobalSettingsPanel.vue'
import GlobalSettingsPreview from '../components/GlobalSettingsPreview.vue'
import GlobalThemeSelector from '../components/GlobalThemeSelector.vue'

export default {
  name: 'global-settings-view',
  components: {
    'global-settings-preview': GlobalSettingsPreview,
    'global-settings-panel': GlobalSettingsPanel,
    'global-theme-selector': GlobalThemeSelector
  },
  computed: {
    ...mapGetters([
      'styles',
      'themes'
    ])
  },
  created () {
    this.$store.dispatch('toggleCurrentGroup', null)
  }
}
</script>

<style lang="scss">

.global-settings-view {
  display:flex;
  align-items: center;
  flex-flow: row wrap;
  flex-wrap: wrap;

  h1 {
    flex:0 1 100%;
    order:1;
  }

  .heading {
    width: calc(100% - 40px);
    border-bottom: 1px solid lightgrey;
    font-size: 22px;
    margin: 10px auto;
    padding: 10px;
    display: block;
  }


  .global-settings-panel {
    order: 2;
    flex: 0 1 50%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-self: flex-start;
    align-self: flex-start;
//    max-height: 80vh;
//    overflow-y: scroll;
    
    .group {
      box-sizing: border-box;
      padding: 0 0 10px;
      border-bottom: 1px solid lightgrey;
      min-width: 240px;
      margin: 5px;
    
      .setting-row {
        min-height: 20px;
        box-sizing: border-box;
      }
    }
  }

  .global-settings-preview  {
    margin: 0 10px;
    flex: 0 1 calc(50% - 20px);
    order: 3;
    align-self: flex-start;
    svg {
      width: 100%;
      max-height: 80vh;
    }
  }

  .global-theme-selector {
    margin: 20px auto;
    flex: 0 1 100%;
    order: 4;
    max-width: 910px;
  }

    

  // mobile
  @media (max-width: 600px) {

    .global-settings-panel {
      flex:0 1 100%;
      max-height: auto;
      overflow-y: auto;  
      svg {
        max-height: auto;
      }
    }

    .global-settings-preview  {
      flex:0 1 100%;
    }
  }
}

</style>
