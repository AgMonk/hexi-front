<template>
  <el-submenu index="2">
    <template slot="title">
      <span>企业管理</span>
    </template>
    <el-menu-item index="/hatch/hatchCompony">企业查询</el-menu-item>
    <el-menu-item index="/hatch/hatchPatent">专利查询</el-menu-item>
    <el-menu-item index="/hatch/hatchSubsidy">补贴查询</el-menu-item>
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