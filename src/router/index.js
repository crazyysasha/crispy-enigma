import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

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
        {
          path: 'task',
          name: 'task',
          component: () => import('../views/TaskView.vue')
        },
        {
          path: 'mentors',
          name: 'mentors',
          component: () => import('../views/MentorsView.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/SettingsGeneralView.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/SettingsGeneralView.vue')
            },
            {
              path: 'notifications',
              name: 'notifications',
              component: () => import('../views/SettingsNotificationView.vue')
            }
          ]
        }
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
          redirect: { name: 'login' }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
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
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404View.vue')
    },
    {
      path: '/ui',
      name: 'test',
      component: () => import('../components/ui/SideBar.vue')
    },
    {
      path: '/examples',
      component: () => import('../views/ExamplesView.vue'),
      children: [
        {
          path: 'carousel',
          component: () => import('../views/examples/CarouselView.vue')
        }
      ]
    }
  ]
})

export default router
