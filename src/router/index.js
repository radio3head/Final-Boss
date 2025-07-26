import { createRouter, createWebHistory } from 'vue-router'

import AnimeListPage from '@/views/AnimeListPage.vue'
import AnimeReview from '@/views/AnimeReview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'anime-list',
      component: AnimeListPage,
    },
    {
      path: '/review',
      name: 'anime-page',
      component: AnimeReview,
    },
  ],
})

export default router
