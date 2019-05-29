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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '@/components/pages/Login')
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
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
