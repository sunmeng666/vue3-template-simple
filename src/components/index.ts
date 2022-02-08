import { App, Component } from 'vue'
import settings from '@/config/settings'

import { createFromIconfontCN } from '@ant-design/icons-vue'
import { convertComponentName } from '@/utils'
// custom component
import PageHeader from './pageHeader/Index.vue'
import PageContainer from './pageContainer/Index.vue'
import Field from './field/Index.vue'
import FilterItem from './filterItem/Index.vue'
import Layout from './layout/Index.vue'
import Menu from './layout/menu/Menu.vue'
import Icon from './icon/Index.vue'
import Details from './details/Index.vue'
import Pagination from './pagination/Index.vue'
import View from './view/Index.vue'
import PageFooter from './pageFooter/Index.vue'

// icon
const IconFont = createFromIconfontCN({
  scriptUrl: settings.iconScriptUrl
})
const components: Component[] = [
  PageHeader,
  PageContainer,
  Field,
  FilterItem,
  Details,
  Layout,
  Menu,
  Icon,
  Pagination,
  View,
  PageFooter
]

export const registerComponents = (app: App): void => {
  app.component('IconFont', IconFont)
  components.forEach(component => {
    if (component.name) {
      // console.log(component.name, convertComponentName(component.name, {
      //   firstUpperCase: true,
      //   prefix: 'm-'
      // }))
      app.component(convertComponentName(component.name, {
        firstUpperCase: true,
        prefix: 'm-'
      }), component)
    }
  })

  app.config.globalProperties.$testFn = (a: any): void => {
    console.log(a)
  }
  // app.mixin({
  //   $testFn: 'Vue'
  // })
}
