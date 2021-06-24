import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from './staticRoute'
import {UserStatus} from "../network/output";
// import whiteList from "./whiteList";
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: staticRoute,
});


router.afterEach((to) => {
    UserStatus({showMessage: 1}).then(res => {
        if (to.path === "/UserReg") {
            // router.push("/UserReg").catch(err => {
            //     console.log('输出报错',err)
            // });
        } else if (res.code !== 2000) {
            router.push("/login").catch(err => {
                console.log('输出报错', err)
            });
        }
        if (res.code === 2000) {
            if (to.path === "/login") {
                router.push("/home").catch(err => {
                    console.log('输出报错', err)
                });
            }
        }

    })
})

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
// router.onError((error) => {
//     const pattern = /Loading chunk (\d)+ failed/g;
//     const isChunkLoadFailed = error.message.match(pattern);
//     const targetPath = router.history.pending.fullPath;
//     if (isChunkLoadFailed) {
//         router.replace(targetPath);
//     }
// });

export default router
