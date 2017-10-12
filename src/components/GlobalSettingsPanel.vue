<template>
  <div class="global-settings-panel">
    
    <group :maxHeight="60">  
      <label slot="header">Body</label>
      <div slot="content">
        <setting-color-picker slot="header"
                              :label="'Body Background Color'"
                              :value="styles.bodyBackgroundColor"
                              :action="'updateBodyBackgroundColor'"/>
        <setting-color-picker :label="'Content Background Color'"
                              :value="styles.contentBackgroundColor"
                              :action="'updateContentBackgroundColor'"/>
      </div>
    </group>

    <group :maxHeight="60">  
      <label slot="header">Header</label>
      <div slot="content">
        <setting-color-picker :label="'Background Color'"
                              :value="styles.headerBackgroundColor"
                              :action="'updateHeaderBackgroundColor'"/>
        <setting-color-picker :label="'Border Color'"
                              :value="styles.headerBorderColor"
                              :action="'updateHeaderBorderColor'"/>
      </div>
    </group>


    <group :maxHeight="120">  
      <label slot="header">Content</label>
      <div slot="content">
        <setting-color-picker :label="'Heading Text Color'"
                              :value="styles.contentHeadingTextColor"
                              :action="'updateContentHeadingTextColor'"/>
        <setting-color-picker :label="'Main Text Color'"
                              :value="styles.contentMainTextColor"
                              :action="'updateContentMainTextColor'"/>
        <setting-color-picker :label="'Link Text Color - Default'"
                              :value="styles.contentLinkTextColor.default"
                              :action="'updateContentLinkTextColorDefault'"/>
        <setting-color-picker :label="'Link Text Color - Hover'"
                              :value="styles.contentLinkTextColor.hover"
                              :action="'updateContentLinkTextColorHover'"/>
      </div>
    </group>


    <group :maxHeight="150">  
      <label slot="header">Quote</label>
        <div slot="content">
        <setting-color-picker :label="'Background Color'"
                                :value="styles.quoteBackgroundColor"
                                :action="'updateQuoteBackgroundColor'"/>
        <setting-color-picker :label="'Border Color'"
                                :value="styles.quoteBorderColor"
                                :action="'updateQuoteBorderColor'"/>
        <setting-color-picker :label="'Text Color'"
                                :value="styles.quoteTextColor"
                                :action="'updateQuoteTextColor'"/>
        <setting-color-picker :label="'Link Text Color - Hover'"
                                :value="styles.quoteLinkTextColor.default"
                                :action="'updateQuoteLinkTextColorDefault'"/>
        <setting-color-picker :label="'Link Text Color - Hover'"
                                :value="styles.quoteLinkTextColor.hover"
                                :action="'updateQuoteLinkTextColorHover'"/>
      </div>
    </group>

  
    <group :maxHeight="250">  
      <label slot="header">Nav Background Color</label>
        <div slot="content">
        <setting-color-picker :label="'default'"
                                :value="styles.navBackgroundColor.default"
                                :action="'updateNavBackgroundColorDefault'"/>
        <setting-color-picker :label="'hover'"
                                :value="styles.navBackgroundColor.hover"
                                :action="'updateNavBackgroundColorHover'"/>
        <setting-color-picker :label="'active'"
                                :value="styles.navBackgroundColor.active"
                                :action="'updateNavBackgroundColorActive'"/>
        <label>Nav Border Color</label>
        <setting-color-picker :label="'default'"
                                :value="styles.navBorderColor.default"
                                :action="'updateNavBorderColorDefault'"/>
        <setting-color-picker :label="'hover'"
                                :value="styles.navBorderColor.hover"
                                :action="'updateNavBorderColorHover'"/>
        <setting-color-picker :label="'active'"
                                :value="styles.navBorderColor.active"
                                :action="'updateNavBorderColorActive'"/>
        <label>Nav Text Color</label>
        <setting-color-picker :label="'default'"
                                :value="styles.navTextColor.default"
                                :action="'updateNavTextColorDefault'"/>
        <setting-color-picker :label="'hover'"
                                :value="styles.navTextColor.hover"
                                :action="'updateNavTextColorHover'"/>
        <setting-color-picker :label="'active'"
                                :value="styles.navTextColor.active"
                                :action="'updateNavTextColorActive'"/>
      </div>
    </group>


    <group :maxHeight="250">  
      <label slot="header">Sub Nav Background Color</label>
        <div slot="content">
        <setting-color-picker :label="'default'"
                              :value="styles.subNavBackgroundColor.default"
                              :action="'updateSubNavBackgroundColorDefault'"/>
        <setting-color-picker :label="'hover'"
                              :value="styles.subNavBackgroundColor.hover"
                              :action="'updateSubNavBackgroundColorHover'"/>
        <setting-color-picker :label="'active'"
                              :value="styles.subNavBackgroundColor.active"
                              :action="'updateSubNavBackgroundColorActive'"/>
        <label>Nav Border Color</label>
        <setting-color-picker :label="'default'"
                              :value="styles.subNavBorderColor.default"
                              :action="'updateSubNavBorderColorDefault'"/>
        <setting-color-picker :label="'hover'"
                              :value="styles.subNavBorderColor.hover"
                              :action="'updateSubNavBorderColorHover'"/>
        <setting-color-picker :label="'active'"
                              :value="styles.subNavBorderColor.active"
                              :action="'updateSubNavBorderColorActive'"/>
        <label>Nav Text Color</label>
        <setting-color-picker :label="'default'"
                              :value="styles.subNavTextColor.default"
                              :action="'updateSubNavTextColorDefault'"/>
        <setting-color-picker :label="'hover'"
                              :value="styles.subNavTextColor.hover"
                              :action="'updateSubNavTextColorHover'"/>
        <setting-color-picker :label="'active'"
                              :value="styles.subNavTextColor.active"
                              :action="'updateSubNavTextColorActive'"/>
      </div>
    </group>


    <group :maxHeight="200">  
      <label slot="header">Nav CTA Background Color</label>
        <div slot="content">
        <setting-color-picker :label="'default'"
                              :value="styles.navCTABackgroundColor.default"
                              :action="'updateNavCTABackgroundColorDefault'"/>
        <setting-color-picker :label="'hover'"
                              :value="styles.navCTABackgroundColor.hover"
                              :action="'updateNavCTABackgroundColorHover'"/>
        <label>Nav CTA Border Color</label>
        <setting-color-picker :label="'default'"
                              :value="styles.navCTABorderColor.default"
                              :action="'updateNavCTABorderColorDefault'"/>
        <setting-color-picker :label="'hover'"
                              :value="styles.navCTABorderColor.hover"
                              :action="'updateNavCTABorderColorHover'"/>
        <label>Nav CTA Text Color</label>
        <setting-color-picker :label="'default'"
                              :value="styles.navCTATextColor.default"
                              :action="'updateNavCTATextColorDefault'"/>
        <setting-color-picker :label="'hover'"
                              :value="styles.navCTATextColor.hover"
                              :action="'updateNavCTATextColorHover'"/>
      </div>
    </group>


    <group :maxHeight="200">  
      <label slot="header">Footer</label>
        <div slot="content">
        <setting-color-picker :label="'Background Color'"
                              :value="styles.footerBackgroundColor"
                              :action="'updateFooterBackgroundColor'"/>
        <setting-color-picker :label="'Border Color'"
                              :value="styles.footerBorderColor"
                              :action="'updateFooterBorderColor'"/>
        <setting-color-picker :label="'Text Color'"
                              :value="styles.footerTextColor"
                              :action="'updateFooterTextColor'"/>
        <label>Primary Links</label>
        <setting-color-picker :label="'Default'"
                              :value="styles.footerPrimaryLinkTextColor.default"
                              :action="'updateFooterPrimaryLinkTextColorDefault'"/>
        <setting-color-picker :label="'Hover'"
                              :value="styles.footerPrimaryLinkTextColor.hover"
                              :action="'updateFooterPrimaryLinkTextColorHover'"/>
        <label>Secondary Links</label>
        <setting-color-picker :label="'Default'"
                              :value="styles.footerSecondaryLinkTextColor.default"
                              :action="'updateFooterSecondaryLinkTextColorDefault'"/>
        <setting-color-picker :label="'Hover'"
                              :value="styles.footerSecondaryLinkTextColor.hover"
                              :action="'updateFooterSecondaryLinkTextColorHover'"/>
      </div>
    </group>


  </div>
</template>

<script>

import { Chrome } from 'vue-color'
import SettingColorPicker from './settings/SettingColorPicker.vue'
import Group from './Group.vue'

export default {
  name: 'global-settings-preview',
  props: ['styles'],
  components: {
    'color-picker': Chrome,
    'setting-color-picker': SettingColorPicker,
    'group': Group
  },
  data () {
    return {
      showPicker: false
    }
  }
}

</script>

<style lang="scss">

</style>
