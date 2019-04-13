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
      meta: { isPublic: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ '@/views/auth/Register')
    },
    {
      path: '/login',
      name: 'login',
      meta: { isPublic: true },
      component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login')
    },
    {
      path: '/',
      name: 'posts',
      meta: { isPublic: true },
      component: () => import(/* webpackChunkName: "posts" */ '@/views/PostsFeed')
    },
    {
      path: '/post/:post_slug',
      name: 'post',
      meta: { isPublic: true },
      component: () => import(/* webpackChunkName: "post" */ '@/views/Post')
    },
    {
      path: '/category/:category_slug',
      name: 'category',
      meta: { isPublic: true },
      component: () => import(/* webpackChunkName: "posts" */ '@/views/PostsFeed')
    },
    {
      path: '/tag/:tag_slug',
      name: 'tag',
      meta: { isPublic: true },
      component: () => import(/* webpackChunkName: "posts" */ '@/views/PostsFeed')
    },
    {
      path: '/admin/user',
      name: 'usersList',
      meta: { isPublic: false },
      component: () => import(/* webpackChunkName: "userProfile" */ '@/views/admin/users/UsersList')
    },
    {
      path: '/admin/user/:userId',
      name: 'userProfile',
      meta: { isPublic: false },
      component: () => import(/* webpackChunkName: "userProfile" */ '@/views/admin/users/UserProfile')
    }
  ]
})
