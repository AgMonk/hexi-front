<template>
  <el-container>
    <el-header>
      <el-button>添加企业</el-button>
    </el-header>
    <el-main>
      <el-table v-loading="componyLoading" :data="componyData">
        <el-table-column prop="address" label="企业"> </el-table-column>
        <el-table-column prop="certificationType" label="认证类型"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="type" label="企业类型"></el-table-column>
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
import {QueryCompanyPage} from "../../../network/output";

export default {
  data() {
    return {
      paging:{
        page: 1,
        size: 10,
      },
      componyData: [],
      componyLoading: true,
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
        this.componyLoading = false,
        console.log(this.componyData, res)
      })
    }
  }
}
</script>

<style scoped>

</style>