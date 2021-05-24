<template>
<el-tabs>
  <el-tab-pane label="企业查询" >
     <hatch-compony />
  </el-tab-pane>
  <el-tab-pane label="专利查询"><hatch-patent /></el-tab-pane>
  <el-tab-pane label="补贴查询"><hatch-subsidy /></el-tab-pane>
</el-tabs>
</template>

<script>
import hatchCompony from "../hatchCompony/hatchCompony";
import hatchPatent from "../hatchPatent/hatchPatent";
import hatchSubsidy from "../hatchSubsidy/hatchSubsidy";
export default {
  name: "hatchNav",
  components: {
    hatchCompony, hatchPatent, hatchSubsidy
  }
}
</script>

<style scoped>

</style>