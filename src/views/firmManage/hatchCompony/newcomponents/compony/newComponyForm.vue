<template>
  <el-form label-width="100px">
    <el-form-item v-if="false">{{ selection.uuid }}</el-form-item>
    <el-form-item label="企业名称">
      <el-input v-model="selection.name"/>
    </el-form-item>
    <el-form-item label="企业地址">
      <el-input v-model="selection.address"/>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="selection.phone"/>
    </el-form-item>
    <el-form-item label="企业类型">
      <el-input v-model="selection.type"/>
    </el-form-item>
    <el-form-item label="认证类型">
      <el-input v-model="selection.certificationType"/>
    </el-form-item>
    <el-form-item style="text-align: right">
      <el-button type="primary" @click="update">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {updateCompony} from "../../../../../network/output";

export default {
  name: "newComponyForm",
  data() {
    return {}
  },
  methods: {
    update() {
      updateCompony(this.selection).then(res => {
        console.log(res)
      })
    },
  },
  props: ['selection']

}
</script>

<style scoped>

</style>