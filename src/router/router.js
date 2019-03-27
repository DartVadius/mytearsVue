import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Login')
    },
    {
      path: '/',
      name: 'posts',
      component: () => import(/* webpackChunkName: "about" */ '@/views/PostsFeed')
    },
    {
      path: '/post/:post_slug',
      name: 'post',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Post')
    },
    {
      path: '/category/:category_slug',
      name: 'category',
      component: () => import(/* webpackChunkName: "about" */ '@/views/PostsFeed')
    },
    {
      path: '/tag/:tag_slug',
      name: 'tag',
      component: () => import(/* webpackChunkName: "about" */ '@/views/PostsFeed')
    },
    {
      path: '/user',
      name: 'users',
      component: () => import(/* webpackChunkName: "about" */ '@/views/PostsFeed')
    }
  ]
})
