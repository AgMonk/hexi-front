<template>
  <el-submenu index="5">
    <template slot="title">
      <span>环境监测</span>
    </template>
    <el-menu-item index="/waterPage">水质</el-menu-item>
    <el-menu-item index="/SoilData">土质</el-menu-item>
    <el-menu-item index="">天气</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "monitorNav",
}
</script>

<style scoped>

</style>