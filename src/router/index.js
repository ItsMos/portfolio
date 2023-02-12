import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: () => import('@/views/Portfolio.vue')
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  {
    name: 'Contact',
    path: '/contact',
    component: () => import('@/views/Contact.vue')
  },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
