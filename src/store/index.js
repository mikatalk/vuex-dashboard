import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

import ui from './ui'
import elements from './elements'
import globalSettings from './global-settings/'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export function createStore () {
  return new Vuex.Store({
    state: {},
    actions,
    mutations,
    getters,
    modules: {
      ui,
      elements,
      globalSettings
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}
