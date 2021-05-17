import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from './staticRoute'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: staticRoute,
});
// router.beforeEach((to, from, next) => {
//   const nextRoute = []
// })

export default router
