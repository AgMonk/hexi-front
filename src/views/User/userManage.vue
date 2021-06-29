<template>
  <el-submenu index="3">
    <template slot="title">
      <span>用户管理</span>
    </template>
    <el-menu-item index="/user/UserInfo">用户信息</el-menu-item>
    <el-menu-item index="/user/UserSave">
      <span slot="title">用户权限管理</span>
    </el-menu-item>
  </el-submenu>
</template>

<script>
export default {
name: "userManage"
}
</script>

<style scoped>

</style>