import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from './staticRoute'
import {UserStatus} from "../network/output";
import {copyObj} from "../common/utils";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: staticRoute,
});

router.afterEach((to) => {
    UserStatus({showMessage: 1}).then(res => {
        if (to.path === "/UserReg" || to.path === "/board") {
            return;
        }
        if (res.code !== 2000) {
            let url = copyObj(window.location.href)
            console.log(url)
            console.log(window.history.pushState)
            // router.push("/login ? r=" + window.location.href).catch(err => {
            //     console.log('输出报错', err) window.history &&
            // });
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
