import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const HomeView = () => import('../views/HomeView.vue')
const PageExample = () => import('../views/PageExample.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomeView },
      { path: '/page-example', component: PageExample },
      { path: '*', component: HomeView }
    ]
  })
}
