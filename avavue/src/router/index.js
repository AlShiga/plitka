import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/Career.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'ProjectsItem',
    component: () => import('../views/ProjectsItem.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'BlogItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogItem.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/P404.vue')
  }
]

const router = createRouter({
  routes,
  // mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
