<template>
  <el-tabs @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
import {QueryPatentPage} from "../../../network/output";

export default {
  name: "compony",
  data() {
    return {
      receiveCompony: {},
      patentData: {},
      paging: {
        page: 1,
        size: 10000,
        condition: {
          companyUuid: undefined,
        }
      },

    }
  },
  created() {
    this.queryPatent();
    console.log(this.$route.query.id)
  },
  methods: {
    queryPatent() {
      this.paging.condition.companyUuid = this.$route.query.id;
      QueryPatentPage(this.paging).then(res => {
        let d = res.data;
        this.patentData = d.records;
        console.log(this.patentData)
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },

}
</script>

<style scoped>

</style>