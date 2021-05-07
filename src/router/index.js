import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //默认页 登录页
  { path: "/", name: "centre", component: () => import('@/views/centre/centre') },
    //注册页
  { path: "/UserReg", name: "UserReg", component: () => import('../views/User/UserReg')},
    //导航主页
  { path: "/Navigation-main", name: "Navigation-main", component: () => import('../views/Navigation/Navigation-main') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
