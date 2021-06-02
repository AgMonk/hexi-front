<template>
  <el-col :span="12">
    <el-table
        ref="multipleTable"
        :data="NewCompony"
        style="width:700px"
        @select="select"
        @select-all="selectAll"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="高新技术企业">
        <table-component/>
      </el-table-column>
    </el-table>
    <el-pagination
        :current-page.sync="paging.page"
        :page-size.sync="paging.size"
        :total="newTotal"
        background
        layout="prev, pager, next,jumper"
        @current-change="queryNewCompony"
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
      newTotal: undefined,
      NewCompony: [],
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
    queryNewCompony() {
      this.paging.condition.type = "高新技术企业";
      QueryCompanyPage(this.paging).then(res => {
        this.NewCompony = res.data.records;
        this.newTotal = res.data.total;
        console.log(this.NewCompony)
      })
    },
  },
  mounted() {
    this.queryNewCompony();
  }
}
</script>

<style scoped>

</style>