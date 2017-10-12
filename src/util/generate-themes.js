import randomColor from 'randomColor'

export function generateTheme (id) {
  return {
    id: id,

    // BODY
    bodyBackgroundColor: randomColor(),

    // CONTENT
    contentBackgroundColor: randomColor(),
    contentHeadingTextColor: randomColor(),
    contentMainTextColor: randomColor(),
    contentLinkTextColor: {
      default: randomColor(),
      hover: randomColor()
    },

    // QUOTE
    quoteBackgroundColor: randomColor(),
    quoteBorderColor: randomColor(),
    quoteTextColor: randomColor(),
    quoteLinkTextColor: {
      default: randomColor(),
      hover: randomColor()
    },

    // HEADER
    headerBackgroundColor: randomColor(),
    headerBorderColor: randomColor(),

    // NAV
    navBackgroundColor: {
      default: randomColor(),
      hover: randomColor(),
      active: randomColor()
    },
    navBorderColor: {
      default: randomColor(),
      hover: randomColor(),
      active: randomColor()
    },
    navTextColor: {
      default: randomColor(),
      hover: randomColor(),
      active: randomColor()
    },

    // SUB NAV
    subNavBackgroundColor: {
      default: randomColor(),
      hover: randomColor(),
      active: randomColor()
    },
    subNavBorderColor: {
      default: randomColor(),
      hover: randomColor(),
      active: randomColor()
    },
    subNavTextColor: {
      default: randomColor(),
      hover: randomColor(),
      active: randomColor()
    },

    // CTA
    navCTABackgroundColor: {
      default: randomColor(),
      hover: randomColor()
    },
    navCTABorderColor: {
      default: randomColor(),
      hover: randomColor()
    },
    navCTATextColor: {
      default: randomColor(),
      hover: randomColor()
    },

    // FOOTER
    footerBorderColor: randomColor(),
    footerBackgroundColor: randomColor(),
    footerTextColor: randomColor(),
    footerPrimaryLinkTextColor: {
      default: randomColor(),
      hover: randomColor()
    },
    footerSecondaryLinkTextColor: {
      default: randomColor(),
      hover: randomColor()
    }
  }
}

export function generateThemes (num = 6) {
  let themes = []
  for (let i = 0; i < num; i++) {
    themes.push(generateTheme(i))
  }
  return themes
}
