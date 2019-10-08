import Vue from 'vue'
import Router from 'vue-router'
//导入登录页面
import Login from './views/Login.vue'
//导入后台主页面
import Index from './views/Index.vue'
//导入后台主页面
import PostList from './views/post-list.vue'
//导入后台主页面
import Issue from './views/Issue.vue'

Vue.use(Router)

export default new Router({
  //访问页面地址栏不用加#号   可忽略
  mode: 'history',
  //可忽略
  base: process.env.BASE_URL,
  //路由的配置
  routes: [
    //将登录页面路由跟组件关联起来
    {path:'/login',component:Login},
     //将主页面路由跟组件关联起来
     {path:'/',component:Index,children:[{path:'post-list',component:PostList},
     {path:'issue',component:Issue}]}
  ],
})
