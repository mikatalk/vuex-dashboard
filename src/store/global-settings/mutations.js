import * as types from './mutations-types'

export default {

  // THEMES
  [types.GLOBAL_SETTINGS_ACTIVATE_THEME] (state, { styles }) {
    state.styles = styles
  },

  // BODY
  [types.ELEMENT_CHANGE_BODY_BACKGROUND_COLOR] (state, { color }) {
    state.styles.bodyBackgroundColor = color.value
  },
  // CONTENT
  [types.ELEMENT_CHANGE_CONTENT_BACKGROUND_COLOR] (state, { color }) {
    state.styles.contentBackgroundColor = color.value
  },
  [types.ELEMENT_CHANGE_CONTENT_HEADING_TEXT_COLOR] (state, { color }) {
    state.styles.contentHeadingTextColor = color.value
  },
  [types.ELEMENT_CHANGE_CONTENT_MAIN_TEXT_COLOR] (state, { color }) {
    state.styles.contentMainTextColor = color.value
  },
  [types.ELEMENT_CHANGE_CONTENT_LINK_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.contentLinkTextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_CONTENT_LINK_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.contentLinkTextColor.hover = color.value
  },
  // HEADER
  [types.ELEMENT_CHANGE_HEADER_BACKGROUND_COLOR] (state, { color }) {
    state.styles.headerBackgroundColor = color.value
  },
  [types.ELEMENT_CHANGE_HEADER_BORDER_COLOR] (state, { color }) {
    state.styles.headerBorderColor = color.value
  },
  // NAV
  [types.ELEMENT_CHANGE_NAV_BACKGROUND_COLOR_DEFAULT] (state, { color }) {
    state.styles.navBackgroundColor.default = color.value
  },
  [types.ELEMENT_CHANGE_NAV_BACKGROUND_COLOR_HOVER] (state, { color }) {
    state.styles.navBackgroundColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_NAV_BACKGROUND_COLOR_ACTIVE] (state, { color }) {
    state.styles.navBackgroundColor.active = color.value
  },
  [types.ELEMENT_CHANGE_NAV_BORDER_COLOR_DEFAULT] (state, { color }) {
    state.styles.navBorderColor.default = color.value
  },
  [types.ELEMENT_CHANGE_NAV_BORDER_COLOR_HOVER] (state, { color }) {
    state.styles.navBorderColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_NAV_BORDER_COLOR_ACTIVE] (state, { color }) {
    state.styles.navBorderColor.active = color.value
  },
  [types.ELEMENT_CHANGE_NAV_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.navTextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_NAV_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.navTextColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_NAV_TEXT_COLOR_ACTIVE] (state, { color }) {
    state.styles.navTextColor.active = color.value
  },
  // SUB NAV
  [types.ELEMENT_CHANGE_SUB_NAV_BACKGROUND_COLOR_DEFAULT] (state, { color }) {
    state.styles.subNavBackgroundColor.default = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_BACKGROUND_COLOR_HOVER] (state, { color }) {
    state.styles.subNavBackgroundColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_BACKGROUND_COLOR_ACTIVE] (state, { color }) {
    state.styles.subNavBackgroundColor.active = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_BORDER_COLOR_DEFAULT] (state, { color }) {
    state.styles.subNavBorderColor.default = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_BORDER_COLOR_HOVER] (state, { color }) {
    state.styles.subNavBorderColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_BORDER_COLOR_ACTIVE] (state, { color }) {
    state.styles.subNavBorderColor.active = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.subNavTextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.subNavTextColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_SUB_NAV_TEXT_COLOR_ACTIVE] (state, { color }) {
    state.styles.subNavTextColor.active = color.value
  },

  // CTA
  [types.ELEMENT_CHANGE_NAV_CTA_BACKGROUND_COLOR_DEFAULT] (state, { color }) {
    state.styles.navCTABackgroundColor.default = color.value
  },
  [types.ELEMENT_CHANGE_NAV_CTA_BACKGROUND_COLOR_HOVER] (state, { color }) {
    state.styles.navCTABackgroundColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_NAV_CTA_BORDER_COLOR_DEFAULT] (state, { color }) {
    state.styles.navCTABorderColor.default = color.value
  },
  [types.ELEMENT_CHANGE_NAV_CTA_BORDER_COLOR_HOVER] (state, { color }) {
    state.styles.navCTABorderColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_NAV_CTA_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.navCTATextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_NAV_CTA_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.navCTATextColor.hover = color.value
  },

  // QUOTE
  [types.ELEMENT_CHANGE_QUOTE_BACKGROUND_COLOR] (state, { color }) {
    state.styles.quoteBackgroundColor = color.value
  },
  [types.ELEMENT_CHANGE_QUOTE_BORDER_COLOR] (state, { color }) {
    state.styles.quoteBorderColor = color.value
  },
  [types.ELEMENT_CHANGE_QUOTE_TEXT_COLOR] (state, { color }) {
    state.styles.quoteTextColor = color.value
  },
  [types.ELEMENT_CHANGE_QUOTE_LINK_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.quoteLinkTextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_QUOTE_LINK_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.quoteLinkTextColor.hover = color.value
  },

  // FOOTER
  [types.ELEMENT_CHANGE_FOOTER_BACKGROUND_COLOR] (state, { color }) {
    state.styles.footerBackgroundColor = color.value
  },
  [types.ELEMENT_CHANGE_FOOTER_BORDER_COLOR] (state, { color }) {
    state.styles.footerBorderColor = color.value
  },
  [types.ELEMENT_CHANGE_FOOTER_TEXT_COLOR] (state, { color }) {
    state.styles.footerTextColor = color.value
  },
  [types.ELEMENT_CHANGE_FOOTER_PRIMARY_LINK_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.footerPrimaryLinkTextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_FOOTER_PRIMARY_LINK_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.footerPrimaryLinkTextColor.hover = color.value
  },
  [types.ELEMENT_CHANGE_FOOTER_SECONDARY_LINK_TEXT_COLOR_DEFAULT] (state, { color }) {
    state.styles.footerSecondaryLinkTextColor.default = color.value
  },
  [types.ELEMENT_CHANGE_FOOTER_SECONDARY_LINK_TEXT_COLOR_HOVER] (state, { color }) {
    state.styles.footerSecondaryLinkTextColor.hover = color.value
  }
}
