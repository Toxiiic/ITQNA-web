import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Login from './views/Login.vue'
import Question from './views/Question.vue'
import SearchResult from './views/SearchResult.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        requireAuth: true
      }
    },
    // {
    //   path: '/result',
    //   name: 'result',
    //   component: Home
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/result',
      name: 'result',
      component: SearchResult
    },
    {
      path: '/question/:qs_id',
      name: 'question',
      component: Question
    }
  ]
})
