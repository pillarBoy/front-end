import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// mixin
import mixinEnv from './mixin/mixin_env';
import 'lib-flexible';
Vue.mixin(mixinEnv);

new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
