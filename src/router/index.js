import Vue from 'vue'
import Router from 'vue-router'
import dayvalues from '@/components/dayvalues'
import yearvalues from '@/components/yearvalues'
import bluechiplist from '@/components/bluechiplist'
import bluechiplistplus from '@/components/bluechiplistplus'
import traderecordplus from '@/components/traderecordplus'
import traderecords from '@/components/traderecords'
import valuechart from '@/components/valuechart'
import onhands from '@/components/onhands'
import dzh from '@/components/dzh'

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
      path: '/traderecordplus',
      name: 'traderecordplus',
      component: traderecordplus
    },
    {
      path: '/bluechiplist',
      name: 'bluechiplist',
      component: bluechiplist
    },
    {
      path: '/dayvalues',
      name: 'dayvalues',
      component: dayvalues
    },
    {
      path: '/yearvalues',
      name: 'yearvalues',
      component: yearvalues
    },
    {
      path: '/valuechart',
      name: 'valuechart',
      component: valuechart
    },
    {
      path: '/bluechiplistplus',
      name: 'bluechiplistplus',
      component: bluechiplistplus
    },
    {
      path: '/dzh',
      name: 'dzh',
      component: dzh
    }
  ]
})
