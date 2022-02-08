import { createApp } from 'vue'
import App from './App.vue'
import router from './router/interceptor'
import { setupStore } from './store'
/** antd */
import Antd from 'ant-design-vue'
import './assets/style/global.less'

import { registerComponents } from './components'
import { setupCommon } from './utils/common'

const app = createApp(App)

setupStore(app)
setupCommon(app)

registerComponents(app)
app.use(router).use(Antd).mount('#app')
