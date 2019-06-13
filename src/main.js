import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {

  // If next page need to Auth
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((res) => {
      console.log(res);
      // Pass the Auth
      if (res.data.success) {
        next();
      } else {
        alert("請先登入");
        next({
          path: '/login'
        });
      }
    })
  } else {
    next();
  }
})
