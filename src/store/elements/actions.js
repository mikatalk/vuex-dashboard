import * as types from './mutations-types'

export default {

  getAllWebElements ({ commit }) {
    commit(types.GET_ALL_WEB_ELEMENTS)
  },

  updateElementSetting ({ commit }, data) {
    commit(types.UPDATE_ELEMENT_SETTING, { data })
  }

}
