import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const HomeView = () => import('../views/HomeView.vue')
const ElementSettingsView = () => import('../views/ElementSettingsView.vue')
const GlobalSettingsView = () => import('../views/GlobalSettingsView.vue')
const ThreeView = () => import('../views/ThreeView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/global', component: GlobalSettingsView },
      { path: '/three', component: ThreeView },
      { path: '/element-settings/:elementName', component: ElementSettingsView },
      { path: '/', component: HomeView }
    ]
  })
}
