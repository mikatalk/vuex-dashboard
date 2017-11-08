import * as types from './mutations-types'

export default {

  [types.UPDATE_PAGE_SCROLL_Y] (state, { value }) {
    state.internals.pageScrollY = value
    console.log(state.internals.pageHeight, state.internals.pageScrollY, state.internals.pageScrollY - window.innerHeight)
    if (state.internals.pageScrollY === state.internals.pageHeight - window.innerHeight) {
      window.scrollTo(0, 0)
      state.internals.pageScrollY = 0
    }
  },

  [types.UPDATE_WINDOW_SIZE] (state, { size }) {
    state.internals.windowWidth = size.width
    state.internals.windowHeight = size.height
    state.internals.pageHeight = size.pageHeight
  },

  [types.UPDATE_MOUSE_POSITION] (state, { position }) {
    state.internals.mouseX = position.x
    state.internals.mouseY = position.y
  }
}
