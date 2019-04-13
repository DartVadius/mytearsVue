import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'

import CapitalizeFilter from './common/filters/capitalize'
import { ApiService } from './api/apiService'

Vue.config.productionTip = false
Vue.filter('capitalize', CapitalizeFilter)

ApiService.init()

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !store.state.auth.isAuthenticated) {
    router.push('login')
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
