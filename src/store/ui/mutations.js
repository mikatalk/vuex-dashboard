import * as types from './mutations-types'

export default {

  [types.UPDATE_PAGE_SCROLL_Y] (state, { value }) {
    state.internals.pageScrollY = value
  },

  [types.UPDATE_WINDOW_SIZE] (state, { size }) {
    state.internals.windowWidth = size.width
    state.internals.windowHeight = size.height
    state.internals.pageHeight = size.pageHeight
  }

}
