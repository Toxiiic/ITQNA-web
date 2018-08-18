import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { user } from './common/api'
import { verifyTokenAndSaveId } from './common/util'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    verifyTokenAndSaveId(() => {
      next()
    }, () => {
      next('/login')
    })
  }
})

Vue.config.productionTip = false

Vue.use(AntD)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

