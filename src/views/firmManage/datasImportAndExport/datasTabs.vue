<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="公司" name="company">
      <company-export/>
    </el-tab-pane>
    <el-tab-pane label="专利" name="patent">
      <patent-export/>
    </el-tab-pane>
    <el-tab-pane label="补贴" name="subsidy">
      <subsidy-export/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import CompanyExport from "./companyExport";
import PatentExport from "./patentExport";
import SubsidyExport from "./subsidyExport";

export default {
  name: "datasTabs",
  components: {SubsidyExport, PatentExport, CompanyExport},
  data() {
    return {
      activeName: 'company'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>