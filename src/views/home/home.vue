<template>
  <el-container>
    <el-header height="40px"><span>面包屑</span></el-header>
    <el-main>
      <el-row :gutter="20">
        <compony-type/>
        <el-col :span="6">
          <div style="width: 300px;height: 300px; background: #FFFFFF; "></div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import ComponyType from "./charts/componyType";

export default {
  name: "home",
  components: {ComponyType},
  data() {
    return {}
  },
}

</script>

<style scoped>
.grid-content {
  width: 300px;
  height: 300px;
}

</style>