import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',

      name: 'home',

      component: Home,

      meta: { title: 'Vada' }, //Add title here
    },
  ],
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Vada' //Fallback title

  document.title = String(to.meta.title) || defaultTitle

  next()
})

export default router
