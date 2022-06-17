import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs  from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'
import CreatePost from '../views/CreatePost.vue'
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
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        title: 'Register'
      }
    },
    {
      path: '/forgot-password',
      name: 'forgotpassword',
      component: ForgotPassword,
      meta:{
        title: 'Forgot-Password'
      }
    },{
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        title: "Profile",
       
      },
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        title: "Admin",
      
      },
    },
    {
      path: "/create-post",
      name: "CreatePost",
      component: CreatePost,
      meta: {
        title: "create-Post",
      
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Blogs-Dev`;
  next();
});


export default router
