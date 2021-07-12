<template>
  <el-form label-width="100px">
    <el-form-item label="企业名称">
      <el-input v-model="componyData.name"/>
    </el-form-item>
    <el-form-item label="企业地址">
      <el-input v-model="componyData.address"/>
    </el-form-item>
    <el-form-item label="企业所在楼栋">
      <el-input v-model="componyData.buildingIndex"/>
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
      <el-button type="primary" @click="addCompony">添加</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import {AddModule} from "../../../network/output";

export default {
  data() {
    return {
      componyData: {
        name: undefined,
        address: undefined,
        phone: undefined,
        type: undefined,
        certificationType: undefined,
        buildingIndex: ''
      },
    }
  },
  methods: {
    addCompony() {
      AddModule(this.componyData).then(res => {
        console.log(res)
        if (res.code === 2000) {
          this.componyData = {};
          this.$emit("success");
        }
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