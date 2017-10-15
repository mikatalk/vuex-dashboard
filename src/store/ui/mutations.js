import * as types from './mutations-types'

export default {

  [types.TOGGLE_CURRENT_GROUP] (state, { id }) {
    if (state.internals.currentOpenGroup === id) {
      state.internals.currentOpenGroup = null
    } else {
      state.internals.currentOpenGroup = id
    }
  },

  [types.UPDATE_PAGE_SCROLL_Y] (state, { value }) {
    state.internals.pageScrollY = value
  },

  [types.UPDATE_WINDOW_SIZE] (state, { size }) {
    state.internals.windowWidth = size.width
    state.internals.windowHeight = size.height
  }
}
