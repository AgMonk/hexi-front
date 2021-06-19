<template>
  <el-submenu index="3">
    <template slot="title">
      <span>用户管理</span>
    </template>
    <el-menu-item-group>
      <template slot="title">用户</template>
      <el-menu-item index="/user/UserInfo">用户信息</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <el-submenu index="/user/UserSave">
        <template slot="title">权限</template>
        <el-menu-item index="/user/UserSave/UserList">用户</el-menu-item>
        <el-menu-item index="/user/UserSave/PRole">角色</el-menu-item>
        <el-menu-item index="/user/UserSave/Permission">权限</el-menu-item>
      </el-submenu>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
name: "userManage"
}
</script>

<style scoped>

</style>