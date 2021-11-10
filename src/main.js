import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import moment from 'moment'
axios.defaults.baseURL = 'http://localhost:3000/'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.prototype.moment = moment

Vue.use(Vant);

Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
