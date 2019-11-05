import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Xiao from '@/pages/xiao/Xiao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/xiao',
      name: 'Xiao',
      comment: Xiao
    }
  ]
})
