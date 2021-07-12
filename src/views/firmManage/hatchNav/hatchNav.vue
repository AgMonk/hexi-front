<template>
  <el-submenu index="2">
    <template slot="title">
      <span>企业管理</span>
    </template>
    <el-menu-item index="/newCompony">
      <span slot="title">企业管理</span>
    </el-menu-item>
    <el-menu-item index="/datasTabs">
      <span slot="title">数据管理</span>
    </el-menu-item>
  </el-submenu>

</template>

<script>

export default {
  name: "hatchNav",
  components: {
  }
}
</script>

<style scoped>
</style>