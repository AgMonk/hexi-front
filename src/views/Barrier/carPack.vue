<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-button @click="carStatus">测试</el-button>
    </el-main>
  </el-container>
</template>

<script>
import {CarStatus} from "../../network/output";

export default {
  name: "carPack",
  methods: {
    carStatus() {
      CarStatus().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>