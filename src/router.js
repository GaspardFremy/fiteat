import firebase from 'firebase/app'
import 'firebase/auth'
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Map from '@/views/Map.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Category from '@/views/Category.vue'
import Confirm from '@/views/Confirm.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
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
      path: '/confirm',
      name: 'Confirm',
      component: Confirm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/',
      redirect: '/home',
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
