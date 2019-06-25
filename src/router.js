import firebase from 'firebase/app'
import 'firebase/auth'
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Category from '@/views/Category.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    }
  ]
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})
export default router
