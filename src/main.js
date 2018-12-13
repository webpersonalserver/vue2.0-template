// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// 引入 cube-ui
import Cube from 'cube-ui'
// 引用 normalize.css
import 'normalize.css'
// 引入axios
import axios from 'axios'
// 配合lib-flexible 实现移动端自适应布局
import 'lib-flexible'
// 引用自定义全局样式
import '@/assets/style/common.scss'

// 注入 cube-ui
Vue.use(Cube)
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
