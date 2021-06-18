<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>{{ subsidy }}</h3>
    </div>
    <div class="text item">
    </div>
  </el-card>
</template>

<script>
export default {
  name: "subsidyVersion",
  data() {
    return {
      param: {
        type: "Subsidy",
        name: "statistics",
        version: 0,
      },
    }
  },
  watch: {
    "subsidy": {
      handler: function () {
      }
    }
  },
  props: ["subsidy"]
}
</script>

<style scoped>

</style>