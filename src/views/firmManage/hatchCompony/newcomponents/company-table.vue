<template>
  <div>
    <el-col :span="12">
      <el-table
          ref="multipleTable"
          :data="data"
          style="width:700px"
          @select="select"
          @select-all="selectAll"
          @selection-change="smallDATA = $event"
      >
        <el-table-column type="selection"></el-table-column>
        <table-component/>


      </el-table>
      <el-pagination
          :current-page.sync="paging.page"
          :page-size.sync="paging.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="getData"
      >
      </el-pagination>
    </el-col>
  </div>
</template>

<script>
import {QueryCompanyPage} from "../../../../network/output";
import tableComponent from "./tableComponent";

export default {
  name: "company-table",
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
      data: [],
      total: 0,
    }
  },
  methods: {
    getData(page) {
      this.paging.page = page;
      console.log(page)
      this.paging.condition.type = this.type;
      QueryCompanyPage(this.paging).then(res => {
        this.data = res.data.records;
        this.total = res.data.total;
      })
    },

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
  },
  mounted() {
    this.getData(1)
  },
  props: ["type"]
}
</script>

<style lang="less" scoped>
.el-table__header-wrapper {
  .el-checkbox__inner {
    display: none;
  }
}
</style>