import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const defaultRoutes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/home/index')
}]
const router = new Router({
  mode: 'history',
  routes: [...defaultRoutes]
})

export default router
