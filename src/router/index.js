import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Admin from '@/components/Admin'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin',
      component: Admin,
      name: 'Admin'
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    }
  ]
})
