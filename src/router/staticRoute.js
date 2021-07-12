const nav = () => import('../components/Nav');
import UserLogin from "../views/User/UserLogin";
import home from "../views/home/home";

const staticRoute = [
    //重定向
    {
        path: '/',
        redirect: '/login'
    },
    //默认页 登录页
    {
        path: "/login",
        name: "login",
        meta: {Nav: false},
        component: UserLogin
    },
    //注册页
    {
        path: "/UserReg",
        meta: {Nav: false},
        component: () => import(/* webpackChunkName: 'user' */'../views/User/UserReg')
    },

    {
        path: '/user',
        component: nav,
        children: [
            //用户信息
            {path: "UserInfo", component: () => import(/* webpackChunkName: 'user' */'../views/User/UserInfo')},
            //修改密码

            {
                path: "EditPassword",
                component: () => import(/* webpackChunkName: 'user' */"../views/EditUser/EditPassword")
            },
            //修改当前用户信息
            {
                path: "EditUserInfo",
                component: () => import(/* webpackChunkName: 'user' */"../views/EditUser/EditUserInfo")
            },
            //查询用户
            {path: "QUser", component: () => import(/* webpackChunkName: 'user' */'../views/Query/QUser')},

            {
                path: "EditUserAvailable",
                component: () => import(/* webpackChunkName: 'user' */"../views/EditUser/EditUserAvailable")
            },

            //用户权限管理
            {path: "UserSave", component: () => import(/* webpackChunkName: 'user' */"../views/Permission/UserSave"),}
        ]
    },
    {
        path: '/hatch',
        component: nav,
        children: [
            {
                path: "hatchCompony",
                component: () => import(/* webpackChunkName: 'hatch' */ "../views/firmManage/hatchCompony/hatchCompony"),
            },
            {
                path: "hatchPatent",
                component: () => import(/* webpackChunkName: 'hatch' */ "../views/firmManage/hatchPatent/hatchPatent")
            },
            {
                path: "hatchSubsidy",
                component: () => import(/* webpackChunkName: 'hatch' */ "../views/firmManage/hatchSubsidy/hatchSubsidy")
            },
            {
                path: "compony",
                name: 'compony',
                component: () => import(/* webpackChunkName: 'hatch' */ "../views/firmManage/hatchCompony/compony")
            },
        ]
    },

    {path: "/home", component: home},
    {
        path: "/newCompony",
        component: () => import(/* webpackChunkName: 'home' */ "../views/firmManage/hatchCompony/newCompony")
    },
    {path: "/addPay", component: () => import(/* webpackChunkName: 'pay'*/ "../views/hydropower/pay/addPay/addPay")},
    {path: "/bill", component: () => import(/* webpackChunkName: 'pay'*/ "../views/hydropower/pay/bill/bill")},
    {path: "/barrier", component: () => import(/* webpackChunkName: 'pay'*/ "../views/Barrier/barrierPage")},
    {path: "/carPack", component: () => import(/* webpackChunkName: 'pay'*/ "../views/Barrier/carPack")},
    {
        path: "/waterPage",
        component: () => import(/* webpackChunkName: 'pay'*/ "../views/monitor/WaterQuality/waterPage")
    },
    {path: "/SoilData", component: () => import(/* webpackChunkName: 'pay'*/ "../views/monitor/SoilData/SoilData")},
    {path: "/Weather", component: () => import(/* webpackChunkName: 'pay'*/ "../views/monitor/Weather/Weather")},
    {
        path: "/screen", meta: {Nav: false},
        component: () => import(/* webpackChunkName: 'pay'*/ "../views/LargeScreen/screen")
    },
    {path: "/test", component: () => import(/* webpackChunkName: 'pay'*/ "../views/LargeScreen/test")},
    {path: "/checkOut", component: () => import("../views/LargeScreen/test1")},
    {path: "/announcement", component: () => import(/* webpackChunkName: 'pay'*/ "../views/Announcement/announcement")},

    //版本控制
    {
        path: "/optimizedVersion",
        component: () => import(/* webpackChunkName: 'pay'*/ "../views/optimizedVersion/optimizedVersion")
    },

    //测试播放
    {path: "/camera", component: () => import("../views/camera/camera")},

    //视频监控
    {path: "/cameraIndex", component: () => import("../views/camera/cameraIndex")},

    //临时存放
    {path: "/temporary", component: () => import("../views/LargeScreen/temporary")},

    //导入导出
    {path: "/datasTabs", component: () => import("../views/firmManage/datasImportAndExport/datasTabs")},

    //游客留言板
    {path: "/board", meta: {Nav: false}, component: () => import("../views/messageBoard/board")},

    //留言板管理
    {path: "/boardManagement", component: () => import("../views/messageBoard/boardManagement")},

    //公司数据首页
    {
        path: "/companyPage",
        name: 'companyPage',
        component: () => import("../views/firmManage/hatchCompony/newcomponents/compony/componyPage")
    }
]

export default staticRoute;