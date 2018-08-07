import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false
  },
  getters : {
    logined: (state) => state.logined
  },
  mutations: {
    setLogined: (state, logined) => state.logined = logined
  },
  actions: {

  }
})
