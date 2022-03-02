// 之前的路由写在main中
// 单独文件路由

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置自己的路由
const routes = [

]

// 创建路由对象
const router = new VueRouter({
  routes
})

// 默认导出路由
export default router
