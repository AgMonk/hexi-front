import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from './staticRoute'
import {UserStatus} from "../network/output";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: staticRoute,
});

router.afterEach((to) => {
    UserStatus({showMessage: 1}).then(res => {
        if (to.path === "/UserReg") {
            return;
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

    }).catch(() => {
        router.push('/login')
    })
})

export default router
