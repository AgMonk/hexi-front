<template>
  <el-form  label-width="100px">
    <el-form-item label="企业名称" >
      <el-input v-model="componyData.name"/>
    </el-form-item>
    <el-form-item label="企业地址">
      <el-input v-model="componyData.address"/>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="componyData.phone"/>
    </el-form-item>
    <el-form-item label="企业类型">
      <el-input v-model="componyData.type"/>
    </el-form-item>
    <el-form-item label="认证类型">
      <el-input v-model="componyData.certificationType"/>
    </el-form-item>
    <el-form-item style="text-align: right">
    <el-button @click="addCompony">添加</el-button>
    <el-button @click="empty">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {AddModule} from "../../../network/output";

export default {
  name: "ComponyFrom",
  data() {
    return {
      componyData: {
        name: "测试企地址h",
        address: "测企业地址h",
        phone: "1768742796",
        type: "中小微业",
        certificationType: "质量体认证",
      },
    }
  },
  created() {

  },
  methods: {
    addCompony() {
      AddModule(this.componyData).then(res => {
        console.log(res)
      })
    },
    empty() {
      this.componyData = {};
    },
  },
}
</script>

<style scoped>
.el-button {
  text-align: right;
}
</style>