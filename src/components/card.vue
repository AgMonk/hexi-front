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

import {copyObj} from "../common/utils";

export default {
  name: "card",
  data() {
    return {
      companyList: [],
      length: ""
    }
  },
  methods: {},
  mounted() {

  },
  watch: {
    "number": {
      handler(a) {
        this.companyList = copyObj(a);
        this.length = a.length;
      }
    }
  },
  props: ['number']
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


</style>