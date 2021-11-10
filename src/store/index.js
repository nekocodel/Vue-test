import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:sessionStorage.getItem('islogin'), //用户是否已登录
    name:sessionStorage.getItem('name')       //用户名
  },
  mutations: {
    loginOK(state,newName){
      state.isLogin = true
      state.name = newName
    }
  },
  actions: {
  },
  modules: {
  }
})
