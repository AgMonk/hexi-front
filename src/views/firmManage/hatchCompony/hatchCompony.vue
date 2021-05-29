<template>
  <el-container>
    <el-header>
      <el-button @click="visible = true;">添加企业</el-button>
      <el-dialog
          title="添加企业"
          :visible.sync="visible"
          width="30%">
        <compony-from/>
      </el-dialog>
      <el-dialog
          :visible.sync="updateVisible"
          title="修改企业"
          width="30%">
        <update-compony :updateCompony="updateCompony"/>
      </el-dialog>
    </el-header>
    <el-main>
      <el-table v-loading="componyLoading" :data="componyData">
        <el-table-column label="企业名称" prop="name"></el-table-column>
        <el-table-column prop="address" label="企业地址"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="certificationType" label="认证类型"></el-table-column>
        <el-table-column prop="type" label="企业类型"></el-table-column>

        <el-table-column label="专利&补贴">
          <template slot-scope="scope">
            <el-button @click="compony = scope.row.uuid; toChild() ">查询</el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button @click=" updateCompony = scope.row; updateVisible = true;">修改</el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button @click="del(scope.row.uuid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
          background
          layout="prev, pager, next,jumper"
          :current-page.sync="paging.page"
          :page-size.sync="paging.size"
          :total="1000"
          @current-change="QueryCompany"
      >
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import {deleteCompony, QueryCompanyPage} from "../../../network/output";
import ComponyFrom from "./ComponyFrom";
import updateCompony from "./updateCompony";

export default {
  components: {
    ComponyFrom,
    updateCompony,

  },
  data() {
    return {
      paging: {
        page: 1,
        size: 10,
      },
      componyData: [],
      componyLoading: true,
      visible: false,
      updateVisible: false,
      patentVisible: false,
      updateCompony: {},
      compony: {},
    }
  },
  created() {
    this.QueryCompany();
  },

  methods: {
    QueryCompany() {
      QueryCompanyPage(this.paging).then(res => {
        let d = res.data;
        this.componyData = d.records;
        this.componyLoading = false
        console.log(res)
      })
    },
    del(id) {
      deleteCompony(id).then(res => {
        console.log(res, id);
      })
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
  }
}
</script>

<style scoped>

</style>