<template>
<div>
  <el-menu
      :default-active="$route.path" router
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="">消息中心</el-menu-item>
    <el-menu-item index="/hatch/hatchNav">企业管理</el-menu-item>
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>