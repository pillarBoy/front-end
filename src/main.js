import Vue from 'vue'

import 'animate.css'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import globalMixins from './mixins/global'
import Toast from './utils/toast'

Vue.use(Toast)

// 注册全局组件
// 自动加载目录下的 .vue 结尾的文件
const componentsContext = require.context("./components", true, /\.vue$/);

componentsContext.keys().forEach(c => {
  let comConfig = componentsContext(c)
  Vue.component(`${c.replace(/\.\/|\.vue$/g, '')}`, comConfig.default || comConfig)
})

Vue.mixin(globalMixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
