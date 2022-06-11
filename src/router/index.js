import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs  from '../views/Blogs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: 'Home'
      }
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs,
      meta:{
        title: 'Blogs'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});


export default router
