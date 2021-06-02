<template>
  <el-col :span="12">
    <el-table
        ref="multipleTable"
        :data="BigCompony"
        style="width:700px"
        @select="select"
        @select-all="selectAll"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="大规模企业">
        <table-component/>
      </el-table-column>
    </el-table>
    <el-pagination
        :current-page.sync="paging.page"
        :page-size.sync="paging.size"
        :total="bigTotal"
        background
        layout="prev, pager, next,jumper"
        @current-change="queryBigCompony"
    >
    </el-pagination>
  </el-col>
</template>

<script>
import {QueryCompanyPage} from "../../../../network/output";
import tableComponent from "./tableComponent";

export default {
  components: {
    tableComponent
  },
  data() {
    return {
      paging: {
        page: 1,
        size: 5,
        condition: {
          type: "",
        }
      },
      bigTotal: undefined,
      BigCompony: [],
    }
  },
  methods: {
    select(selection) {
      if (selection.length > 1) {
        let del_row = selection.shift()
        this.$refs.multipleTable.toggleRowSelection(del_row, false)
      }
    },
    selectAll(selection) {
      if (selection.length > 1) {
        selection.length = 1
      }
    },

    queryBigCompony() {
      this.paging.condition.type = "大规模企业";
      QueryCompanyPage(this.paging).then(res => {
        this.BigCompony = res.data.records;
        this.bigTotal = res.data.total;
        console.log(this.bigTotal)
      })
    },
  },
  mounted() {
    this.queryBigCompony();
  }
}
</script>

<style scoped>

</style>