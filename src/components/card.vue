<template>
  <el-card class="box-card" style="width: 400px">
    <div slot="header" class="clearfix" style="font-size: 17px; font-weight: 600">
      <span>所在公司</span>
      <span style="float: right">所在公司数： {{ length }}</span>
    </div>
    <div v-for="i in companyList" :key="i" class="text item">
      {{ i }}
    </div>
  </el-card>

</template>

<script>
import {QueryCompanyStatistics} from "../network/output";

export default {
  name: "card",
  data() {
    return {
      companyList: [],
      length: ""
    }
  },
  methods: {
    listGroupByBuildingIndex() {

      QueryCompanyStatistics({showMessage: 1}).then(res => {
        this.companyList = res.data.listGroupByBuildingIndex[this.num];
        // console.log(this.companyList.length)
        this.length = this.companyList.length;
      })
    }
  },
  mounted() {
    this.listGroupByBuildingIndex()
    // console.log(this.num)
  },
  props: ['num']
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>