import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs  from '../views/Blogs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
  ]
})

export default router
