<template>
  <el-form label-width="100px">
    <el-form-item label="专利名称">
      <el-input v-model="patent.name"/>
    </el-form-item>
    <el-form-item label="专利状态">
      <el-input v-model="patent.status"/>

      <!--      <el-select v-model="patent.status" style="width: 100%">-->
      <!--        <el-option value="申请"></el-option>-->
      <!--        <el-option value="待续费"></el-option>-->
      <!--        <el-option value="实审"></el-option>-->
      <!--        <el-option value="有效"></el-option>-->
      <!--      </el-select>-->
    </el-form-item>
    <el-form-item label="专利类型">
      <!--      <el-select v-model="patent.type" style="width: 100%">-->
      <!--        <el-option value="著作权"></el-option>-->
      <!--        <el-option value="外观结构专利"></el-option>-->
      <!--        <el-option value="发明专利"></el-option>-->
      <!--        <el-option value="实用新型专利"></el-option>-->
      <!--      </el-select>-->
      <el-input v-model="patent.type"/>

    </el-form-item>
    <el-form-item label="专利内容">
      <el-input v-model="patent.description" autosize type="textarea"/>
    </el-form-item>
    <el-form-item label="专利号">
      <el-input v-model="patent.id" autosize type="textarea"/>
    </el-form-item>
    <el-form-item style="text-align: right">
      <el-button @click="patent = {}">清空</el-button>
      <el-button type="primary" @click="addPatent">添加</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import {AddPatent} from "../../network/output";

export default {
  name: "addPatentDialog",
  data() {
    return {
      patent: {
        companyUuid: undefined,
      },
    }
  },
  methods: {
    //添加专利
    addPatent() {
      this.patent.companyUuid = this.uuid;
      AddPatent(this.patent).then(res => {
        console.log(res);
        if (res.code === 2000) {
          this.$emit("success");
          this.patent = {};
        }
      })
    },
  },
  props: ['uuid'],
  mounted() {
    console.log(this.uuid)
  }
}
</script>

<style scoped>

</style>