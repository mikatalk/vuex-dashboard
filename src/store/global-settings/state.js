import { generateThemes } from './../../util/generate-themes'

export default {

  themes: generateThemes(55),

  styles: {

    // BODY
    bodyBackgroundColor: '#D9EAFF',

    // CONTENT
    contentBackgroundColor: '#F9F9F9',
    contentHeadingTextColor: '#2F2F2F',
    contentMainTextColor: '#2F2F2F',
    contentLinkTextColor: {
      default: '#004499',
      hover: '#00aaff'
    },

    // QUOTE
    quoteBackgroundColor: '#baba44',
    quoteBorderColor: '#717571',
    quoteTextColor: '#000066',
    quoteLinkTextColor: {
      default: '#004499',
      hover: '#00aaff'
    },

    // HEADER
    headerBackgroundColor: '#0AD387',
    headerBorderColor: '#3A3A3A',

    // NAV
    navBackgroundColor: {
      default: '#F9F9F9',
      hover: '#D22E2E',
      active: '#C7FFCA'
    },
    navBorderColor: {
      default: '#3A3A3A',
      hover: '#F9F9F9',
      active: '#D22E2E'
    },
    navTextColor: {
      default: '#1B1B1B',
      hover: '#F9F9F9',
      active: '#232323'
    },

    // SUB NAV
    subNavBackgroundColor: {
      default: '#F9F9F9',
      hover: '#D22E2E',
      active: '#C7FFCA'
    },
    subNavBorderColor: {
      default: '#3A3A3A',
      hover: '#F9F9F9',
      active: '#D22E2E'
    },
    subNavTextColor: {
      default: '#1B1B1B',
      hover: '#F9F9F9',
      active: '#232323'
    },

    // CTA
    navCTABackgroundColor: {
      default: '#b29fa1',
      hover: '#bb05a1'
    },
    navCTABorderColor: {
      default: '#f29f01',
      hover: '#fbf501'
    },
    navCTATextColor: {
      default: '#02a4a1',
      hover: '#004aa1'
    },

    // FOOTER
    footerBorderColor: '#c3c3c3',
    footerBackgroundColor: '#3c3c3c',
    footerTextColor: '#ffffff',
    footerPrimaryLinkTextColor: {
      default: '#004499',
      hover: '#00aaff'
    },
    footerSecondaryLinkTextColor: {
      default: '#009944',
      hover: '#00ffaa'
    }
  }
}
