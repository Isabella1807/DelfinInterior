import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/sell',
      name: 'sell',
      component: () => import('../views/SellView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/login',
      name: 'Login admin',
      component: () => import('../views/AdminLoginView.vue')
    },
  ]
})

export default router
