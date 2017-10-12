import * as types from './mutations-types'

export default {
  toggleCurrentGroup ({ commit }, id) {
    commit(types.TOGGLE_CURRENT_GROUP, { id })
  }
}
