import * as types from './mutations-types'
import HEADER from './../../constants/elements/header.js'
import CONTENT from './../../constants/elements/content.js'
import FOOTER from './../../constants/elements/footer.js'
import _ from 'lodash'

export default {

  [types.GET_ALL_WEB_ELEMENTS] (state) {
    // TODO: replace with API call
    // For demo purpose we pushed a few clones of default header data
    state.elements = [
      _.cloneDeep(HEADER),
      _.cloneDeep(CONTENT),
      _.cloneDeep(FOOTER)
    ]
  },

  [types.UPDATE_ELEMENT_SETTING] (state, { data }) {
    data.scope.value = data.value
    // post changes to iframe
    window.iframePreview.contentWindow.postMessage(
      {
        message: 'updateCss',
        selector: data.scope.selector,
        property: data.scope.property,
        value: data.value
      }, document.location.origin
    )
  }
}
