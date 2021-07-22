import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "@/assets/public.scss"

Vue.use(ElementUI)


router.beforeEach((to, from ,next)=>{
  if(!store.state.token) {
    console.log(to)
    if(to.matched.length > 0 && to.matched[to.matched.length - 1].meta.requireAuth) {
      // console.log("不需要登录")
      next()
    }else{
      // console.log("需要登录");
      if(to.path == '/login') {
        next();
      }else{
        next("/login")
      }
    }
  }else{
    if(!store.state.permissionList) {   // 登录过了，没有权限列表， 请求获取权限列表
      store.dispatch("SET_PERMISSION").then(()=>{
        next({
          path: to.path
        })
      })
    }else{
      console.log("登录过， 已经有权限列表了")
      if(to.path != '/login') {
        next();
      }else{
        next(from.fullPath)
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
