import { defineStore } from 'pinia'
import settings from '@/config/settings'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import { store } from '..'

// TODO:fix this
// interface AppState { }
export const useAppStore = defineStore({
  id: 'app',
  state: (): any => ({
    siderWidth: settings.siderWidth || 250,
    locale: 'zh' // en
  }),
  getters: {
    getSiderWidth (): number {
      return this.siderWidth
    },
    getAntdLocale (): any {
      switch (this.locale) {
        case 'zh':
          return zhCN
      }
    }
  },
  actions: {
    setSiderWidth (value: number | string): void {
      this.siderWidth = value
    }
  }
})

// Need to be used outside the setup

export function setupStore (store: any) {
  return useAppStore(store)
}
