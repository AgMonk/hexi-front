<template>
<el-form label-width="100px">
  <el-form-item label="补贴名称">
    <el-input v-model="subsidyData.name"/>
  </el-form-item>
  <el-form-item label="补贴金额">
    <el-input v-model="subsidyData.price"/>
  </el-form-item>
  <el-form-item label="企业uuid">
    <el-input v-model="subsidyData.companyUuid"/>
  </el-form-item>
  <el-form-item style="text-align: right">
    <el-button addSubsidy @click="addSubsidy">添加</el-button>
    <el-button @click="subsidyData = {}">清空</el-button>
  </el-form-item>

</el-form>
</template>

<script>
import {AddSubsidy, QueryCompanyPage} from "../../../network/output";

export default {
  data() {
    return {
      subsidyData: {
        name: undefined,
        price: undefined,
        companyUuid: undefined,
      },
      page: {
        page: 1,
        size: 10,
      },
    }
  },
  created() {
    this.addSubsidy();
    this.compony1();
  },
  methods: {
    addSubsidy() {
      AddSubsidy(this.subsidyData).then(res => {
        console.log(res)
      })
    },
    compony1() {
      QueryCompanyPage(this.page).then(res => {
        console.log(res.data.records);
      })
    },
  }
}
</script>

<style scoped>

</style>