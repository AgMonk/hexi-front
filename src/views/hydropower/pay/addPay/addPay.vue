<template>
  <el-container>
    <el-header>
      <el-form :inline="true" :model="companyPage" class="demo-form-inline">
        <el-form-item label="企业名称">
          <el-input v-model="companyPage.condition.name" placeholder="企业名称"></el-input>
        </el-form-item>
        <el-form-item label="企业地址">
          <el-input v-model="companyPage.condition.address" placeholder="企业地址"></el-input>
        </el-form-item>
        <el-form-item label="企业类型">
          <el-input v-model="companyPage.condition.type" placeholder="企业类型"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryCompanyPage">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <pay-card/>
    </el-main>
  </el-container>
</template>

<script>
import {QueryCompanyPage} from "../../../../network/output";
import PayCard from "./payCard";
import {Unicom} from "../../../../common/utils";

export default {
  name: "addPay",
  components: {PayCard},
  data() {
    return {
      companyPage: {
        page: 1,
        size: 5,
        condition: {
          name: undefined,
          address: undefined,
          type: undefined,
          certificationType: undefined,
        },
      },
      componyData: undefined,
    }
  },
  created() {
    // this.queryCompanyPage();
  },
  methods: {
    queryCompanyPage() {
      QueryCompanyPage(this.companyPage).then(res => {
        console.log(res);
        this.componyData = res;
        Unicom.$emit('data', res)
      });

    }
  }
}
</script>

<style scoped>

</style>