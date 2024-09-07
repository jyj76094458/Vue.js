import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/loginSuccess',
      name: 'loginSuccess',
      component: () => import('../views/LoginSuccessView.vue')
    },
    {
      path: '/memberJoin',
      name: 'memberJoin',
      component: () => import('../views/MemberJoinView.vue')
    },
    {
      path: '/memberJoinSuccess',
      name: 'memberJoinSuccess',
      component: () => import('../views/MemberJoinSuccessView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/CartView.vue'),
    },
    {
      path: '/itemList',
      name: 'itemList',
      component: () => import('../views/cart/ItemListView.vue'),
    },
  ]
})

export default router
