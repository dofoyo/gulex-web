import Vue from 'vue'
import Router from 'vue-router'
import goodstocks from '@/components/goodstocks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodstocks',
      component: goodstocks
    }
  ]
})
