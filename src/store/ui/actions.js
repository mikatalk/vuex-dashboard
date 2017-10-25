import * as types from './mutations-types'

export default {
  updatePageScrollY ({ commit }, value) {
    commit(types.UPDATE_PAGE_SCROLL_Y, { value })
  },
  updateWindowSize ({ commit }, size) {
    commit(types.UPDATE_WINDOW_SIZE, { size })
  },
  updateMousePosition ({ commit }, position) {
    commit(types.UPDATE_MOUSE_POSITION, { position })
  }
}
