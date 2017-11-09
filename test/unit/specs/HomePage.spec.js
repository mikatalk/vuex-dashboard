import Vue from 'vue'
import HomeView from '@/views/HomeView'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomeView)
    const vm = new Constructor().$mount()
    console.log(' ~~> ', vm.$el.querySelector('.home-view > h1').textContent)
    expect(vm.$el.querySelector('.home-view > h1').textContent)
      .to.equal('Home')
  })
})
