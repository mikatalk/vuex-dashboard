import * as types from './mutations-types'

export default {

  // THEMES
  activateTheme ({ commit }, styles) {
    commit(types.GLOBAL_SETTINGS_ACTIVATE_THEME, { styles })
  },

  // BODY
  updateBodyBackgroundColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_BODY_BACKGROUND_COLOR, { color })
  },

  // CONTENT
  updateContentBackgroundColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_CONTENT_BACKGROUND_COLOR, { color })
  },
  updateContentHeadingTextColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_CONTENT_HEADING_TEXT_COLOR, { color })
  },
  updateContentMainTextColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_CONTENT_MAIN_TEXT_COLOR, { color })
  },
  updateContentLinkTextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_CONTENT_LINK_TEXT_COLOR_DEFAULT, { color })
  },
  updateContentLinkTextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_CONTENT_LINK_TEXT_COLOR_HOVER, { color })
  },

  // HEADER
  updateHeaderBackgroundColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_HEADER_BACKGROUND_COLOR, { color })
  },
  updateHeaderBorderColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_HEADER_BORDER_COLOR, { color })
  },

  // NAV
  updateNavBackgroundColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_BACKGROUND_COLOR_DEFAULT, { color })
  },
  updateNavBackgroundColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_BACKGROUND_COLOR_HOVER, { color })
  },
  updateNavBackgroundColorActive ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_BACKGROUND_COLOR_ACTIVE, { color })
  },
  updateNavBorderColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_BORDER_COLOR_DEFAULT, { color })
  },
  updateNavBorderColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_BORDER_COLOR_HOVER, { color })
  },
  updateNavBorderColorActive ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_BORDER_COLOR_ACTIVE, { color })
  },
  updateNavTextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_TEXT_COLOR_DEFAULT, { color })
  },
  updateNavTextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_TEXT_COLOR_HOVER, { color })
  },
  updateNavTextColorActive ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_TEXT_COLOR_ACTIVE, { color })
  },

  // SUB NAV
  updateSubNavBackgroundColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_BACKGROUND_COLOR_DEFAULT, { color })
  },
  updateSubNavBackgroundColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_BACKGROUND_COLOR_HOVER, { color })
  },
  updateSubNavBackgroundColorActive ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_BACKGROUND_COLOR_ACTIVE, { color })
  },
  updateSubNavBorderColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_BORDER_COLOR_DEFAULT, { color })
  },
  updateSubNavBorderColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_BORDER_COLOR_HOVER, { color })
  },
  updateSubNavBorderColorActive ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_BORDER_COLOR_ACTIVE, { color })
  },
  updateSubNavTextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_TEXT_COLOR_DEFAULT, { color })
  },
  updateSubNavTextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_TEXT_COLOR_HOVER, { color })
  },
  updateSubNavTextColorActive ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_SUB_NAV_TEXT_COLOR_ACTIVE, { color })
  },

  // CTA
  updateNavCTABackgroundColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_CTA_BACKGROUND_COLOR_DEFAULT, { color })
  },
  updateNavCTABackgroundColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_CTA_BACKGROUND_COLOR_HOVER, { color })
  },
  updateNavCTABorderColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_CTA_BORDER_COLOR_DEFAULT, { color })
  },
  updateNavCTABorderColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_CTA_BORDER_COLOR_HOVER, { color })
  },
  updateNavCTATextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_CTA_TEXT_COLOR_DEFAULT, { color })
  },
  updateNavCTATextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_NAV_CTA_TEXT_COLOR_HOVER, { color })
  },

  // QUOTE
  updateQuoteBackgroundColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_QUOTE_BACKGROUND_COLOR, { color })
  },
  updateQuoteBorderColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_QUOTE_BORDER_COLOR, { color })
  },
  updateQuoteTextColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_QUOTE_TEXT_COLOR, { color })
  },
  updateQuoteLinkTextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_QUOTE_LINK_TEXT_COLOR_DEFAULT, { color })
  },
  updateQuoteLinkTextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_QUOTE_LINK_TEXT_COLOR_HOVER, { color })
  },

  // FOOTER
  updateFooterBackgroundColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_BACKGROUND_COLOR, { color })
  },
  updateFooterBorderColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_BORDER_COLOR, { color })
  },
  updateFooterTextColor ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_TEXT_COLOR, { color })
  },
  updateFooterPrimaryLinkTextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_PRIMARY_LINK_TEXT_COLOR_DEFAULT, { color })
  },
  updateFooterPrimaryLinkTextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_PRIMARY_LINK_TEXT_COLOR_HOVER, { color })
  },
  updateFooterSecondaryLinkTextColorDefault ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_SECONDARY_LINK_TEXT_COLOR_DEFAULT, { color })
  },
  updateFooterSecondaryLinkTextColorHover ({ commit }, color) {
    commit(types.ELEMENT_CHANGE_FOOTER_SECONDARY_LINK_TEXT_COLOR_HOVER, { color })
  }
}
