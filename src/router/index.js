// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import UsersPage from '../views/UsersPage.vue'
import UserDetail from '../views/UserDetail.vue'
import UserLeaderboard from '@/views/UserLeaderboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage
  },
  {
    path: '/users/:username',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/leaderboard',
    name: 'UserLeaderboard',
    component: UserLeaderboard, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
