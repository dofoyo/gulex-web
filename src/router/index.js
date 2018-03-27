import Vue from 'vue'
import Router from 'vue-router'
import goodstocks from '@/components/goodstocks'
import bluechiplist from '@/components/bluechiplist'
import traderecords from '@/components/traderecords'
import onhands from '@/components/onhands'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bluechiplist',
      component: bluechiplist
    },
    {
      path: '/onhands',
      name: 'onhands',
      component: onhands
    },
    {
      path: '/traderecords',
      name: 'traderecords',
      component: traderecords
    },
    {
      path: '/bluechiplist',
      name: 'bluechiplist',
      component: bluechiplist
    },
    {
      path: '/goodstocks',
      name: 'goodstocks',
      component: goodstocks
    }
  ]
})
