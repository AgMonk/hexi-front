<template>
  <el-form label-width="100px">
    <el-form-item label="专利名称">
      <el-input v-model="selectPatent.name"/>
    </el-form-item>
    <el-form-item label="专利状态">
      <el-input v-model="selectPatent.status"/>
    </el-form-item>
    <el-form-item label="专利类型">
      <el-input v-model="selectPatent.type"/>
    </el-form-item>
    <el-form-item label="专利内容">
      <el-input v-model="selectPatent.description" :rows="2" type="textarea"/>
    </el-form-item>
    <el-form-item label="专利号">
      <el-input v-model="selectPatent.id" autosize type="textarea"/>
    </el-form-item>
    <el-form-item style="text-align: right">
      <el-button type="primary" @click="patentDialog">修改</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import {UpdatePatent} from "../../network/output";

export default {
  name: "modifyPatentComponent",
  data() {
    return {}
  },
  methods: {
    patentDialog() {
      UpdatePatent(this.selectPatent).then(res => {
        console.log(res);
        if (res.code === 2000) {
          this.$emit("success");
        }
      })
    },
  },
  mounted() {
    console.log(this.selectPatent);
  },
  props: ["selectPatent"]
}
</script>

<style scoped>

</style>