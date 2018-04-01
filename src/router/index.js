import Vue from 'vue'
import Router from 'vue-router'
import cashandvalues from '@/components/cashandvalues'
import bluechiplist from '@/components/bluechiplist'
import traderecords from '@/components/traderecords'
import valuechart from '@/components/valuechart'
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
      path: '/cashandvalues',
      name: 'cashandvalues',
      component: cashandvalues
    },
    {
      path: '/valuechart',
      name: 'valuechart',
      component: valuechart
    }
  ]
})
