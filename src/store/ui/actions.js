import * as types from './mutations-types'

export default {
  toggleCurrentGroup ({ commit }, id) {
    commit(types.TOGGLE_CURRENT_GROUP, { id })
  },
  updatePageScrollY ({ commit }, value) {
    commit(types.UPDATE_PAGE_SCROLL_Y, { value })
  },
  updateWindowSize ({ commit }, size) {
    commit(types.UPDATE_WINDOW_SIZE, { size })
  }
}
