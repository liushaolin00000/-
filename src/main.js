import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入element-ui组件
import ElementUi from 'element-ui'
//导入axios组件
import axios from 'axios'
//导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
//可以忽略，生产环境是否有提示
Vue.config.productionTip = false

//把axios挂载到原型上
Vue.prototype.$axios = axios;
//设置基准路径
axios.defaults.baseURL = "http://localhost:3000";
//添加路由守卫
router.beforeEach((to,from,next)=>{
  //如果不是登录页都必须判断是否有token
  if(to.path !=='/login'){
    //获取token
    const token = JSON.parse(localStorage.getItem('user')||'{}').token;
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
     //除了以上情况页面都可以正常跳转
     next()
  }
})
//注册element-ui组件
Vue.use(ElementUi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
