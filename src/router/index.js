import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }

  ]
})
