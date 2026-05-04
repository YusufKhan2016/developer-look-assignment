import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/layout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '',
          name: '',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
      ],
    },
  ],
})

export default router
