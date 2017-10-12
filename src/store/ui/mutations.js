import * as types from './mutations-types'

export default {

  [types.TOGGLE_CURRENT_GROUP] (state, { id }) {
    if (state.internals.currentOpenGroup === id) {
      state.internals.currentOpenGroup = null
    } else {
      state.internals.currentOpenGroup = id
    }
  }
}
