<template>
  <el-tabs>
    <el-tab-pane label="专利" name="">

    </el-tab-pane>
    <el-tab-pane label="补贴" name="">

    </el-tab-pane>
    <el-tab-pane label="查询" name="">

    </el-tab-pane>
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
  },

}
</script>

<style scoped>

</style>