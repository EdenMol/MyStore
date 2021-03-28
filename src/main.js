import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import {routes} from './routes'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

axios.defaults.baseURL = 'https://mydb-43167-default-rtdb.firebaseio.com'


new Vue({
  router,
  store,
  render: h => h(App),
 
}).$mount('#app')
