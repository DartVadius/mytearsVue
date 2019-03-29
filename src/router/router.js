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
      component: () => import(/* webpackChunkName: "register" */ '@/views/auth/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login')
    },
    {
      path: '/',
      name: 'posts',
      component: () => import(/* webpackChunkName: "posts" */ '@/views/PostsFeed')
    },
    {
      path: '/post/:post_slug',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ '@/views/Post')
    },
    {
      path: '/category/:category_slug',
      name: 'category',
      component: () => import(/* webpackChunkName: "posts" */ '@/views/PostsFeed')
    },
    {
      path: '/tag/:tag_slug',
      name: 'tag',
      component: () => import(/* webpackChunkName: "posts" */ '@/views/PostsFeed')
    },
    {
      path: '/admin/user',
      name: 'userProfile',
      component: () => import(/* webpackChunkName: "userProfile" */ '@/views/admin/users/UserProfile')
    }
  ]
})
