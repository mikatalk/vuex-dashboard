import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const MenuOverlay = () => import('../views/MenuView.vue')
const HomeView = () => import('../views/HomeView.vue')
const ThreeView = () => import('../views/ThreeView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/menu', component: MenuOverlay },
      { path: '/three', component: ThreeView },
      { path: '/', component: ThreeView },
      // { path: '*', component: ThreeView }
      { path: '*', component: HomeView }
    ]
  })
}
