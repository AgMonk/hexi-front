<template>
  <el-form label-width="100px">
    <el-form-item v-if="false">{{ edit.uuid }}</el-form-item>
    <el-form-item label="企业名称">
      <el-input v-model="edit.name"/>
    </el-form-item>
    <el-form-item label="企业地址">
      <el-input v-model="edit.address"/>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="edit.phone"/>
    </el-form-item>
    <el-form-item label="企业类型">
      <el-input v-model="edit.type"/>
    </el-form-item>
    <el-form-item label="认证类型">
      <el-input v-model="edit .certificationType"/>
    </el-form-item>
    <el-form-item style="text-align: right">
      <el-button type="primary" @click="update">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {updateCompony} from "../../../../../network/output";
import {copyObj} from "../../../../../common/utils";

export default {
  name: "newComponyForm",
  data() {
    return {
      edit: {}
    }
  },
  methods: {
    update() {
      updateCompony(this.edit).then(res => {
        console.log(res)
      })
    },
  },
  mounted() {
    this.edit = copyObj(this.selection);
  },
  props: ['selection']

}
</script>

<style scoped>

</style>