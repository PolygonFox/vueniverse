import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

// for code splitting
let view = name => {
  return process.env.CLIENT_BUILD ?
  () => System.import('../views/' + name + '.vue') :
  require('../views/' + name + '.vue')
}

const routes = [
  {
    path: '/',
    component: view('Home')
  },
  {
    path: '/about',
    component: view('About')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
