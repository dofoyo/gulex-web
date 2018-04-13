import Vue from 'vue'
import Router from 'vue-router'
import dayvalues from '@/components/dayvalues'
import yearvalues from '@/components/yearvalues'
import bluechiplist from '@/components/bluechiplist'
import bluechiplistplus from '@/components/bluechiplistplus'
import simulationplus from '@/components/simulationplus'
import simulations from '@/components/simulations'
import valuechart from '@/components/valuechart'
import onhands from '@/components/onhands'
import dzh from '@/components/dzh'
import readme from '@/components/readme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'bluechiplist'
      }
    },
    {
      path: '/onhands',
      name: 'onhands',
      component: onhands
    },
    {
      path: '/simulations',
      name: 'simulations',
      component: simulations
    },
    {
      path: '/simulationplus',
      name: 'simulationplus',
      component: simulationplus
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
    },
    {
      path: '/readme',
      name: 'readme',
      component: readme
    }
  ]
})
