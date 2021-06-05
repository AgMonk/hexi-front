<template>
  <el-submenu index="4">
    <template slot="title">
      <span>智能水电</span>
    </template>
    <el-menu-item-group>
      <template slot="title">缴费</template>
      <el-menu-item index="/addPay">缴费记录</el-menu-item>
      <el-menu-item index="/user/EditUserInfo">修改用户信息</el-menu-item>
      <el-menu-item index="/user/EditPassword">修改密码</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "hydropowernav"
}
</script>

<style scoped>

</style>