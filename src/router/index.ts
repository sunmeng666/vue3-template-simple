import { createRouter, createWebHistory } from 'vue-router'
import { CustomRouteRecordRaw } from '@/types/router'

import IndexRoute from '@/router/modules'
import AppCenterRoute from './modules/appCenter'
import SystemRoute from './modules/system'
import AccountRoute from './modules/account'
import BusinessRoute from '@/router/modules/business'

export const constantRoutes: Array<CustomRouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/user/Login.vue'),
    hidden: true,
    meta: {
      verification: false
    }
  }
]

export const asyncRoutes: Array<CustomRouteRecordRaw> = [
  ...IndexRoute,
  ...AppCenterRoute,
  ...BusinessRoute,
  ...SystemRoute,
  ...AccountRoute
]

const router = createRouter({
  history: createWebHistory('/'),
  routes: constantRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
