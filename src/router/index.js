import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //默认页 登录页
  { path: "/", name: "centre", component: () => import('@/views/centre/centre'), meta: {showleftNav: true} },
    //注册页
  { path: "/UserReg", name: "UserReg", component: () => import('../views/User/UserReg'), meta: {showleftNav: true}},
    //首页
  { path: "/Home", name: "Home", component: () => import('../views/Home/home.vue') },
    //用户信息

    //修改密码
  { path: "/EditPassword", name: "EditPassword", component: () => import("../views/EditUser/EditPassword") },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
