<template>
<div v-show="$route.meta.Nav !== false">
  <el-menu
      :default-active="$route.path" router
      class="el-menu"
      mode="horizontal"
      background-color="#FFFFFF"
      text-color="#333333"
      active-text-color="#ffd04b">
    <el-menu-item index=""><span style="font-size: 20px; font-weight: 1000">柳州天步科技创业园智慧园区</span></el-menu-item>

    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="">管理</el-menu-item>
  </el-menu>

</div>
</template>

<script>
export default {
  name: "topNav",
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>

</style>