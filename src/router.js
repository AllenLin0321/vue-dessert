import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './components/Dashboard'
import Products from './components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/pages/Login')
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [{
        path: 'products',
        name: 'Products',
        component: Products,
        meta: {
          requiresAuth: true
        }
      }]
    },
  ]
})
