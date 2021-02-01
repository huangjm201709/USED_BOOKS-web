import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EI from 'element-ui'
import '../src/assets/css/common.less'
import  'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(EI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//导航
router.beforeEach((to ,from, next) => {
  //防止无限循环
  if (to.path === '/entry') {
    return next();
  }
  else {
    next({path: '/entry'})
  }
})