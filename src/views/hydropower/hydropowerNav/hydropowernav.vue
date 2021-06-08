<template>
  <el-submenu index="4">
    <template slot="title">
      <span>智能水电</span>
    </template>
    <el-menu-item-group>
      <template slot="title">缴费</template>
      <el-menu-item index="/addPay">缴费记录</el-menu-item>
      <el-menu-item index="/user/EditUserInfo">预留</el-menu-item>
      <el-menu-item index="/user/EditPassword">预留</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <template slot="title">账单</template>
      <el-menu-item index="/bill">账单</el-menu-item>
      <el-menu-item index="/user/EditUserInfo">预留</el-menu-item>
      <el-menu-item index="/user/EditPassword">预留</el-menu-item>
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