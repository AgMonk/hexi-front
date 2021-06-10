<template>
  <el-container>
    <!--  direction horizontal -->
    <el-header height="120px">
      <el-row :gutter="20">
        <el-col :span="8">
          <div style=" background: #409EFF">11</div>
        </el-col>
        <el-col :span="10"><h1>柳州天步科技创业园智慧园区管理系统</h1></el-col>
        <el-col :span="6">
          <div style=" background: #409EFF">11</div>
        </el-col>
      </el-row>
    </el-header>
    <br>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="3">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
        <el-col :span="4">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
        <el-col :span="10">
          <div style="height: 616px;background: #409EFF">
            <img height="616" src="../../assets/img/screen.png" width="1891.66"/>
          </div>
        </el-col>
        <el-col :span="4">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
        <el-col :span="3">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="4">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
        <el-col :span="3">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
        <el-col :span="10">
          <div style="height: 200px;background: #409EFF">11</div>
        </el-col>
        <el-col :span="3">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
        <el-col :span="4">
          <div style="height: 200px; background: #409EFF">11</div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "screen",
  data() {
    return {}
  },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#45646A')
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style scoped>
h1 {
  font-size: 60px;
  text-align: center;
  color: #FFFFFF;
}
</style>