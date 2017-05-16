import Vue from 'vue'
import Router from 'vue-router'
import Confirm from '@/components/Confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Confirm',
      component: Confirm
    }
  ]
})
