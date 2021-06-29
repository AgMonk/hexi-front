<template>
  <el-container>
    <el-header>
      <el-form :inline="true" :model="companyPage">
        <el-form-item label="企业名称">
          <el-input v-model="companyPage.condition.name" placeholder="企业名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryCompanyPage">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <pay-card/>
        </el-col>
        <el-col :span="12">
          <hydropower-query/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {QueryCompanyPage} from "../../../../network/output";
import PayCard from "./payCard";
import {Unicom} from "../../../../common/utils";
import HydropowerQuery from "./hydropowerQuery";

export default {
  name: "addPay",
  components: {HydropowerQuery, PayCard},
  data() {
    return {
      companyPage: {
        page: 1,
        size: 500,
        condition: {
          name: "",
          address: undefined,
          type: undefined,
          certificationType: undefined,
        },
      },
      componyData: undefined,
    }
  },
  methods: {
    queryCompanyPage() {
      if (this.companyPage.condition.name.length === 0) {
        this.$message.error({
          message: "企业名称不能为空",
        })
      } else {
        QueryCompanyPage(this.companyPage).then(res => {
          console.log(res);
          this.componyData = res;
          Unicom.$emit('data', res)
        });
      }
    }
  }
}
</script>

<style scoped>

</style>