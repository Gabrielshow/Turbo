import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/inbox',
      name: 'Inbox',
      component: () => import('@/views/Inbox.vue')
    },
    {
      path: '/starred',
      name: 'Starred',
      component: () => import('@/views/Starred.vue')
    },
    {
      path: '/snoozed',
      name: 'Snoozed',
      component: () => import('@/views/Snoozed.vue')
    },
    {
      path: '/sent',
      name: 'Sent',
      component: () => import('@/views/Sent.vue')
    },
    {
      path: '/drafts',
      name: 'Drafts',
      component: () => import('@/views/Drafts.vue')
    },
    {
      path: '/chats',
      name: 'Chats',
      component: () => import('@/views/Chats.vue')
    },
    {
      path: '/spam',
      name: 'Spam',
      component: () => import('@/views/Spam.vue')
    },
    {
      path: '/trash',
      name: 'Trash',
      component: () => import('@/views/Trash.vue')
    }
  ]
})

export default router
