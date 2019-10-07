import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  //访问页面地址栏不用加#号   可忽略
  mode: 'history',
  //可忽略
  base: process.env.BASE_URL,
  //路由的配置
  routes: [
  ]
})
