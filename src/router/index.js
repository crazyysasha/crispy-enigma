import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'Dashboard',
          name: 'home',
          component: Dashboard
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path:'task',
          name:'Task',
          component:()=> import ('../views/TaskView.vue')
        },
        {
          path:'mentors',
          name:'Mentors',
          component:()=>import ('../views/MentorsView.vue')
        },
        {
          path:'message',
          name:'Message',
          component:()=>import('../views/MessageView.vue')
        }
      ]
    },

    // {
    //   path: '/auth',
    //   component: AuthLayout,
    //   children: [
    //     {
    //       path: 'login',
    //       component: () => import('../views/LoginView.vue')
    //     },
    //     {
    //       path: 'register',
    //       component: () => import('../views/RegisterView.vue')
    //     },
    //   ],
    // }

  ]
})

export default router
