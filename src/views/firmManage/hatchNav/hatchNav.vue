<template>
<el-tabs>
  <el-tab-pane label="企业查询" >
     <hatch-compony />
  </el-tab-pane>
</el-tabs>
</template>

<script>
import hatchCompony from "../hatchCompony/hatchCompony";
export default {
  name: "hatchNav",
  components: {
    hatchCompony,
  }
}
</script>

<style scoped>

</style>