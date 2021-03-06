import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/about',
  name: 'About',
  component: () => import('@/About.vue')
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
