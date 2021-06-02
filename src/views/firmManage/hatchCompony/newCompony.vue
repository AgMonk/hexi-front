<template>
  <el-container>
    <el-header>
      <div style="text-align: right">
        <el-button plain type="success" @click="toChild">查询专利&补贴</el-button>
        <el-button plain type="primary" @click="edit">修改企业</el-button>
        <el-button plain type="danger">删除企业</el-button>
      </div>

    </el-header>
    <el-main>
      <el-row :gutter="20">
        <big-table/>
        <small-table/>
      </el-row>
      <br/><br/>
      <el-row :gutter="20">

        <new-table/>
        <el-col :span="12">
          <el-table
              ref="multipleTable"
              :data="SecondaryCompony"
              style="width:700px"
              @select="select"
              @select-all="selectAll"
              @selection-change=" uuid = $event "
          >
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="科技型中小企业">
              <table-component/>
            </el-table-column>
          </el-table>
          <el-pagination
              :current-page.sync="paging.page"
              :page-size.sync="paging.size"
              :total="secondaryTotal"
              background
              layout="prev, pager, next,jumper"
              @current-change="querySecondaryCompony"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {QueryCompanyPage} from "../../../network/output";
import tableComponent from "./newcomponents/tableComponent";
import SmallTable from "./newcomponents/smallTable";
import BigTable from "./newcomponents/bigTable";
import NewTable from "./newcomponents/newTable";

export default {
  name: "newCompony",
  components: {
    NewTable,
    BigTable,
    SmallTable,
    tableComponent,
  },
  data() {
    return {
      uuid: undefined,
      paging: {
        page: 1,
        size: 5,
        condition: {
          type: "",
        }
      },
      secondaryTotal: undefined,
      //公司类型数据

      SecondaryCompony: [],

    }
  },
  methods: {
    edit() {
      console.log(this.uuid)
    },
    toChild() {
      this.$router.push({
        path: '/hatch/compony',
        // name: 'home',
        query: {
          id: this.compony,
        }
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
    querySecondaryCompony() {
      this.paging.condition.type = "科技型中小企业";
      QueryCompanyPage(this.paging).then(res => {
        this.secondaryTotal = res.data.total;
        this.SecondaryCompony = res.data.records;
        console.log(this.SecondaryCompony)
      })
    },
  },
  mounted() {
    this.querySecondaryCompony();
  }
}
</script>

<style scoped>

</style>