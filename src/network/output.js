import {transfer} from './request';

//登录*
export function UserLogin( username, password ) {
    return transfer({
        url: '/api/user/login',
        params: { username, password },
    })
}
//获取当前登录状态
export  function UserStatus() {
    return transfer({ url: '/api/user/status', }) }
//获取用户信息*
export  function UserInfo() {
    return transfer({ url: '/api/user/info', }) }
//注册*
export  function UserReg(username, password, phone, name) {
    return transfer({
        method: 'post',
        data: {username, password, phone, name},
        url: '/api/user/reg',
    })
}
//修改当前用户信息*
export function EditUserInfo(phone,name) {
    return transfer({
        method: 'post',
        data: {phone, name},
        url: '/api/user/editUserInfo',
    })
}
//修改密码*
export function EditPassword(oldPass,newPass) {
    return transfer({
        params: {oldPass,newPass},
        url: '/api/user/editPassword',
    })
}
//登出*
export function UserLogout() {
    return transfer({url: '/api/user/logout'}) }
//查询用户列表（分页）*
export function UserPage({page, size, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, condition},
        url: '/api/user/a/page',
    })
}
//修改用户可用状态*
export function GetUserAvailable(userId) {
    return transfer({
        params: {userId},
        url: '/api/user/a/available',
    })
}

//权限
//添加/修改*
export function AddUserSave({ remark, namespace, action, target, id }) {
    return transfer({
        method: 'post',
        data: { remark, namespace, action, target, id },
        url: '/api/permission/save',
    })
}
//查询*
export function Page({page, size, condition}) {
    return transfer({
        method: 'post',
        data: { page, size, condition },
        url: '/api/permission/page',
    })
}
//删除
export function UserDel(id) {
    return transfer({
        params: {id},
        url: '/api/permission/del',
    })
}
// 添加
export function RoleSave({name, nickname, permissions, id}) {
    return transfer({
        method: 'post',
        data: {name, nickname, permissions, id},
        url: '/api/role/save',
    })
}
//查询role
export function QueryRole({page, size, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, condition},
        url: '/api/role/page',
    })
}

//查询所有
export function FindAll() {
    return transfer({ url: '/api/permission/findAll',}) }
//查询当前用户拥有的角色和权限
export function HasRoles() {
    return transfer({ url: '/api/permission/hasRoles',}) }

//用户-角色 关联
//查询指定用户拥有的角色和权限
export function HasRole(userId) {
    return transfer({
        params: {userId},
        url: '/api/user_role/hasRoles',
    })
}
//添加/修改
export function addSave(userId, roleId, uuid) {
    return transfer({
        method: 'post',
        data: { userId, roleId, uuid },
        url: 'api/user_role/save'
    })
}
//删除
// export function Del(id) {
//     return transfer({
//         params: (id),
//         url: '/api/user_role/del',
//     })
// }
//孵化器模块
//本模块有3种实体，名称和接口前缀为：企业Company
//专利Patent，补贴Subsidy；接口名完全相同，仅在分页查询时的可选过滤条件有所不同

//添加企业
export function AddModule( name, address, phone, type, certificationType) {
    return transfer({
        method: 'post',
        data: { name, address, phone, type, certificationType },
        url: '/api/company/add',
    })
}
//修改企业
export function Update(uuid, name, address, phone, type, certificationType) {
    return transfer({
        method: 'post',
        data: { uuid, name, address, phone, type, certificationType },
        url: '/api/company/update',
    })
}
//添加专利
export function AddPatent(name, description, status, type, companyUuid, ) {
    return transfer({
        method: 'post',
        data: { name, description, status, type, companyUuid },
        url: '/api/patent/add',
    })
}
//修改专利
export function UpdatePatent( uuid, name, description, status, type, companyUuid ) {
    return transfer({
        method: 'post',
        data: { uuid, name, description, status, type, companyUuid },
        url: '/api/patent/update',
    })
}
//添加补贴
export function AddSubsidy(name, price, companyUuid) {
    return transfer({
        method: 'post',
        data: { name, price, companyUuid },
        url: '/api/subsidy/add',
    })
}
//修改补贴
export function UpdateSubsidy(uuid, name, price, companyUuid) {
    return transfer({
        method: 'post',
        data: { uuid, name, price, companyUuid },
        url: '/api/subsidy/update',
    })
}
//删除

//查询
export function QueryPage({page, size, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, condition},
        //condition条件
        url: '/api/user_role/page',
    })
}
//查询统计信息
export function QueryStatistics() {
    return transfer({
        url: '/api/user_role/statistics'
    })
}
