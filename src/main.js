import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { user } from './common/api'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


Vue.config.productionTip = false

Vue.use(AntD)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    let token = window.localStorage.getItem('token')

    if(token) {
      //有token向后台检查token是否有效
      user.verifyToken(token, res => {
        if(res.data.valid) {
          //没有问题，正常通行
          next()
        } else {
          //有问题，得登陆
          next('/login')
        }
      })
    } else {
      //没有token直接跳到登陆
      next('/login')
    }
  }
})