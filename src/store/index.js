import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

import ui from './ui'
import three from './three'

Vue.use(Vuex)

const debug = false // process.env.NODE_ENV !== 'production'

export function createStore () {
  return new Vuex.Store({
    state: {},
    actions,
    mutations,
    getters,
    modules: {
      ui,
      three
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}
