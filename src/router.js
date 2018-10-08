import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/components/Task'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task',
      component: Task
    },
      {
          path: '/signup',
          name: 'Signup',
          component: Signup
      },
      {
        path:'/signin',
          name:'Signin',
          component: Signin
      }


  ]
})
