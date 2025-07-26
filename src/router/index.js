import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimeListPage from '@/views/AnimeListPage.vue'
import Anime from '@/views/Anime.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'anime-list',
      component: AnimeListPage,
    },
    {
      path: '/anime',
      name: 'anime-page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Anime,
    },
  ],
})

export default router
