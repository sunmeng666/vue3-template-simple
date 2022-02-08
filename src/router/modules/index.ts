import { Component } from '@vue/runtime-core'
import Layout from '@/components/layout/Index.vue'
import { CustomRouteRecordRaw } from '@/types/router'

const welcome: Array<CustomRouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Layout,
    redirect: '/welcome',
    meta: {
      icon: 'appstore',
      title: '首页',
      permission: true
    },
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: (): Component => import('@/views/index/Welcome.vue'),
        meta: {
          title: '首页',
          icon: 'appstore',
          permission: true,
          default: 10
        }
      }

    ]
  }
]

export default welcome
