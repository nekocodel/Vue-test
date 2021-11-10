import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from '../testing/Button.vue'
import Header from '../testing/Header.vue'
import Field from '../testing/Field.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Navbar from '../testing/Navbar.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/button',
    component:Button
  },
  {
    path:'/header',
    component:Header
  },
  {
    path:'/field',
    component:Field
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path: '/shouye',
    component: () => import('../testing/Shouye.vue'),
  },
  {
    path: '/me',
    component: () => import('../views/me.vue'),
  },
  {
    path: '/swipe',
    component: () => import('../testing/Swipe.vue'),
  },
  {
    path: '/inf',
    component: () => import('../testing/Inf.vue'),
  },
  {
    path: '/article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/vant',
    component: () => import('../testing/vant.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
