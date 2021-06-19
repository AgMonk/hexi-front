import {cloud, transfer} from './request';

//登录*
export function UserLogin( username, password ) {
    return transfer({
        url: '/user/login',
        params: {username, password},
    })
}
//获取当前登录状态
export  function UserStatus() {
    return transfer({url: '/user/status',})
}
//获取用户信息*
export  function UserInfo() {
    return transfer({url: '/user/info',})
}
//注册*
export  function UserReg(username, password, phone, name) {
    return transfer({
        method: 'post',
        data: {username, password, phone, name},
        url: '/user/reg',
    })
}
//修改当前用户信息*
export function EditUserInfo(phone,name) {
    return transfer({
        method: 'post',
        data: {phone, name},
        url: '/user/editUserInfo',
    })
}
//修改密码*
export function EditPassword(oldPass,newPass) {
    return transfer({
        params: {oldPass, newPass},
        url: '/user/editPassword',
    })
}
//登出*
export function UserLogout() {
    return transfer({url: '/user/logout'})
}
//查询用户列表（分页）*
export function UserPage(data) {
    return transfer({
        method: 'post',
        data,
        url: '/user/a/page',
    })
}
//修改用户可用状态*
export function GetUserAvailable(userId) {
    return transfer({
        params: {userId},
        url: '/user/a/available',
    })
}

//权限
//添加/修改*
export function AddUserSave({ remark, namespace, action, target, id }) {
    return transfer({
        method: 'post',
        data: {remark, namespace, action, target, id},
        url: '/permission/save',
    })
}
//查询*
export function Page({page, size, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, condition},
        url: '/permission/page',
    })
}
//删除*
export function UserDel(id) {
    return transfer({
        params: {id},
        url: '/permission/del',
    })
}
// 添加*
export function RoleSave({name, nickname, permissions, id}) {
    return transfer({
        method: 'post',
        data: {name, nickname, permissions, id},
        url: '/role/save',
    })
}
//查询role*
export function QueryRole({page, size, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, condition},
        url: '/role/page',
    })
}

//查询所有*
export function FindAll() {
    return transfer({url: '/permission/findAll',})
}
//查询当前用户拥有的角色和权限*
export function HasRoles(userId) {
    return transfer({
        params: {userId},
        url: '/user_role/hasRoles',
    })
}

//用户-角色 关联
//查询指定用户拥有的角色和权限
export function HasRole(userId) {
    return transfer({
        params: {userId},
        url: '/user_role/hasRoles',
    })
}
//添加/修改*
export function addSave({ userId, roleId, }) {
    return transfer({
        method: 'post',
        data: {userId, roleId},
        url: '/user_role/save',
    })
}
// 删除*
export function Del(id) {
    return transfer({
        params: {id},
        url: '/user_role/del',
    })
}
//查找所有*
export function find() {
    return transfer({url: '/role/findAll'})
}

//孵化器模块
//本模块有3种实体，名称和接口前缀为：企业Company
//专利Patent，补贴Subsidy；接口名完全相同，仅在分页查询时的可选过滤条件有所不同

//添加企业
export function AddModule({name, address, phone, type, certificationType}) {
    return transfer({
        method: 'post',
        data: {name, address, phone, type, certificationType},
        url: '/Company/add',
    })
}
//修改企业
export function updateCompony({uuid, name, address, phone, type, certificationType}) {
    return transfer({
        method: 'post',
        data: {uuid, name, address, phone, type, certificationType},
        url: '/Company/update',
    })
}
//添加专利
export function AddPatent({name, description, status, type, companyUuid,}) {
    return transfer({
        method: 'post',
        data: {name, description, status, type, companyUuid},
        url: '/Patent/add',
    })
}
//修改专利
export function UpdatePatent({uuid, name, description, status, type, companyUuid}) {
    return transfer({
        method: 'post',
        data: {uuid, name, description, status, type, companyUuid},
        url: '/Patent/update',
    })
}
//添加补贴
export function AddSubsidy({name, price, companyUuid}) {
    return transfer({
        method: 'post',
        data: {name, price, companyUuid},
        url: '/Subsidy/add',
    })
}

//修改补贴
export function UpdateSubsidy({uuid, name, price, companyUuid}) {
    return transfer({
        method: 'post',
        data: {uuid, name, price, companyUuid},
        url: '/Subsidy/update',
    })
}

//删除公司
export function deleteCompony(id) {
    return transfer({
        params: {id},
        url: '/Company/del'
    })
}

//删除补贴
export function deleteSubsidy(id) {
    return transfer({
        params: {id},
        url: '/Subsidy/del'
    })
}

//删除专利
export function deletePatent(id) {
    return transfer({
        params: {id},
        url: '/Patent/del'
    })
}

//查询
export function QuerySubsidyPage({page, size, start, end, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, start, end, condition},
        //condition条件
        url: '/Subsidy/page',
    })
}

export function QueryPatentPage({page, size, start, end, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, start, end, condition},
        //condition条件
        url: '/Patent/page',
    })
}

export function QueryCompanyPage({page, size, start, end, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, start, end, condition},
        //condition条件
        url: '/Company/page',
    })
}

//查询统计信息
export function QueryCompanyStatistics() {
    return transfer({
        url: '/Company/statistics'
    })
}

export function QueryPatentStatistics() {
    return transfer({
        url: '/Patent/statistics'
    })
}

export function QuerySubsidyStatistics() {
    return transfer({
        url: '/Subsidy/statistics'
    })
}

//道闸模块
export function BarrierLogPage({page, size, start, end}) {
    return transfer({
        url: '/BarrierLog/page',
        method: 'post',
        data: {page, size, start, end},
    })
}

//缴费账单模块

//添加缴费记录
export function PaymentAdd({companyUuid, type, amount}) {
    return transfer({
        url: '/Payment/add',
        method: 'post',
        data: {companyUuid, type, amount},
    })
}

//修改缴费记录
export function PaymentUpdate({uuid, companyUuid, type, amount}) {
    return transfer({
        url: '/Payment/update',
        method: 'post',
        data: {uuid, companyUuid, type, amount},
    })
}

//查询缴费记录
export function Paymentpage({page, size, start, end, condition}) {
    return transfer({
        url: '/Payment/page',
        method: 'post',
        data: {page, size, start, end, condition},
    })
}

//金额、用量统计
export function PaymentSum() {
    return transfer({
        url: '/Payment/sum',
        method: 'post',
        data: []
    })
}

//删除缴费
export function PaymentDel(id) {
    return transfer({
        url: '/Payment/del',
        params: {id},
    })
}

//查询账单
export function QueryBill({page, size, condition}) {
    return transfer({
        url: 'Bill/page',
        method: 'post',
        data: {page, size, condition}
    })
}

//修改账单
export function UpdateBill({uuid, companyUuid, type, month, amount, unitPrice, remark, priceConstruction}) {
    return transfer({
        url: 'Bill/update',
        method: 'post',
        data: {uuid, companyUuid, type, month, amount, unitPrice, remark, priceConstruction}
    })
}

//添加账单
export function AddBill({companyUuid, type, month, amount, unitPrice, remark, priceConstruction}) {
    return transfer({
        url: 'Bill/add',
        method: 'post',
        data: {companyUuid, type, month, amount, unitPrice, remark, priceConstruction}
    })
}

//删除账单
export function BillDel(id) {
    return transfer({
        url: '/Bill/del',
        params: {id},
    })
}

//道闸查询
export function BarrierPage({page, size, start, end, condition}) {
    return transfer({
        data: {page, size, start, end, condition},
        method: 'post',
        url: '/BarrierLog/page'
    })
}

//查询车辆分布
export function CarStatus(day) {
    return transfer({
        params: {day},
        url: '/BarrierLog/getCarStatus'
    })
}

//水质查询
export function WaterQualityPage({page, size, start, end, condition}) {
    return transfer({
        method: 'post',
        data: {page, size, start, end, condition},
        url: '/WaterQuality/page'
    })
}

//查询站点
export function getStations() {
    return transfer({
        url: '/WaterQuality/getStations'
    })
}

//土质查询
export function SoilDatapage({page, size, start, end}) {
    return transfer({
        method: 'post',
        data: {page, size, start, end},
        url: '/SoilData/page'
    })
}

//天气
export function GetWeather(city) {
    return transfer({
        url: "/Weather/get",
        params: {city}
    })
}

//水电统计
export function BillStatistics() {
    return transfer({
        url: '/Bill/statistics',
        // params: {month},
    })
}

//公告
//公告查询
export function AnnouncementPage({page, size, start, end}) {
    return transfer({
        method: 'post',
        data: {page, size, start, end},
        url: 'Announcement/page'
    })
}

// 公告添加
export function AddAnnouncement({title, content}) {
    return transfer({
        url: '/Announcement/add',
        method: 'post',
        data: {title, content},
    })
}

//修改公告
export function UpdateAnnouncement({title, content, uuid}) {
    return transfer({
        url: '/Announcement/update',
        method: 'post',
        data: {title, content, uuid},
    })
}

//删除公告
export function AnnouncementDel(id) {
    return transfer({
        url: '/Announcement/del',
        params: {id}
    })
}


//版本优化
//获取当前版本
export function getVersion() {
    return cloud({
        url: '/version/get',
    })
}

//切换版本
export function setVersion(id) {
    return cloud({
        url: '/version/set',
        params: {id}
    })
}

//获取数据
export function getJson({type, name, version}) {
    return cloud({
        url: '/json/get',
        params: {type, name, version}
    })
}

//修改数据
export function setJson(params, data) {
    return cloud({
        url: '/json/set',
        method: 'post',
        params,
        data
    })
}

//覆盖数据
export function overWrite({type, name, version}) {
    return cloud({
        url: '/json/overWrite',
        params: {type, name, version}
    })
}

//获取版本列表
export function versionList() {
    return cloud({
        url: '/json/list',
    })
}

//创建新版本
export function createVersion(id) {
    return cloud({
        url: '/json/create',
        params: {id}
    })
}

//删除版本
export function delVersion(id) {
    return cloud({
        url: '/json/del',
        params: {id}
    })
}