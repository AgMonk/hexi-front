const Nav = () => import('../components/Nav');
import home from '../views/Home/home'

const staticRoute = [
    //重定向
    {
        path: '/',
        redirect: '/login'
    },
    //默认页 登录页
    { path: "/login",name: "login", component: () => import(/* webpackChunkName: 'user' */'../views/User/UserLogin') },
    //注册页
    { path: "/UserReg", component: () => import(/* webpackChunkName: 'user' */'../views/User/UserReg') },


    //首页
    {
        path: '/home',
        name: 'home',
        component: Nav,
        children: [
            {
                path: 'home',
                component: home,
                // component: () => import(/* webpackChunkName: 'home' */ '../views/Home/home.vue'),
            }
        ]
    },
    {
      path: '/user',
      component: Nav,
      children: [
          //用户信息
          {path: "UserInfo", component: () => import(/* webpackChunkName: 'user' */'../views/User/UserInfo')},
          //修改密码
          { path: "EditPassword", component: () => import(/* webpackChunkName: 'user' */"../views/EditUser/EditPassword") },
          //修改当前用户信息
          { path: "EditUserInfo", component: () => import(/* webpackChunkName: 'user' */"../views/EditUser/EditUserInfo")},
          //查询用户
          {path: "QUser", component: () => import(/* webpackChunkName: 'user' */'../views/Query/QUser')},

          { path: "EditUserAvailable", component: () => import(/* webpackChunkName: 'user' */"../views/EditUser/EditUserAvailable") },

          { path: "UserSave", component: () => import(/* webpackChunkName: 'user' */"../views/Permission/UserSave"),
          children: [
              { path: "Permission", component: () => import(/* webpackChunkName: 'user' */"../views/Permission/TNav/mission/Permission") },
              { path: "PRole", component: () => import(/* webpackChunkName: 'user' */"../views/Permission/TNav/Role/PRole") },
              { path: "UserList", component: () => import(/* webpackChunkName: 'user' */"../views/Permission/TNav/PUser/UserList")},
          ],
          }
      ]
    },
    {
        path: '/hatch',
        component: Nav,
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
    }

]

export default staticRoute;