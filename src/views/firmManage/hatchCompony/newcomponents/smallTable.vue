<template>
  <el-col :span="12">
    <el-table
        ref="multipleTable"
        :data="SmallCompony"
        style="width:700px"
        @select="select"
        @select-all="selectAll"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="中小微企业">
        <table-component/>
      </el-table-column>
    </el-table>
    <el-pagination
        :current-page.sync="paging.page"
        :page-size.sync="paging.size"
        :total="smallTotal"
        background
        layout="prev, pager, next,jumper"
        @current-change="querySmallCompony"
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
      smallTotal: undefined,
      SmallCompony: [],
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
    querySmallCompony() {
      this.paging.condition.type = "中小微企业";
      QueryCompanyPage(this.paging).then(res => {
        this.SmallCompony = res.data.records;
        this.smallTotal = res.data.total;
        console.log(this.SmallCompony)
      })
    },
  },
  mounted() {
    this.querySmallCompony();
  }
}
</script>

<style scoped>

</style>