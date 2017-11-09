import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// modules
import ui from './ui'

Vue.use(Vuex)

const debug = false // process.env.NODE_ENV !== 'production'

export function createStore () {
  return new Vuex.Store({
    state: {},
    modules: {
      ui
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}
