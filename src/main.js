// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引用 normalize.css
import 'normalize.css'
// 引入axios
import axios from 'axios'
// 配合lib-flexible 实现移动端自适应布局
import 'lib-flexible'

// 注入Element
Vue.use(ElementUI)
// 注入axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
