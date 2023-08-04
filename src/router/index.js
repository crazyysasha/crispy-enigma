import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DefaultLayout from '../layouts/DefaultLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue'
import { Transition } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },

      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'login.redirect',
          redirect: {name: 'login'}
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'registation',
          component: () => import('../views/RegistrationView.vue')
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import('../views/ResetView.vue')
        },
      ]
    },
    {
      path: '/ui',
      name: 'test',
      component: () => import('../components/SideBarLoading.vue')
    }
  ]
})

export default router
