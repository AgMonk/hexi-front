<template>
<el-container>
  <el-header>
  </el-header>
  <el-main>
    <el-table :data="patentData">
      <el-table-column label="专利名称" prop="name"></el-table-column>
      <el-table-column label="专利状态" prop="status"></el-table-column>
      <el-table-column label="专利类型	" prop="type"></el-table-column>
      <el-table-column label="专利内容" prop="description"></el-table-column>
    </el-table>
  </el-main>
  <el-footer>
    <el-pagination
        :current-page.sync="paging.page"
        :page-size.sync="paging.size"
        :total="1000"
        background
        layout="prev, pager, next,jumper"
        @current-change="queryPatent"
    >
    </el-pagination>
  </el-footer>
</el-container>
</template>

<script>
import {QueryCompanyPage, QueryPatentPage} from "../../../network/output";

export default {
  name: "hatchPatent",
  data() {
    return {
      loading: false,
      patentVisible: false,
      paging: {
        page: 1,
        size: 10,
      },
      page: {
        page: 1,
        size: 500,
      },
      patentData: [],
      c: [],
    }
  },
  created() {
    this.queryPatent();
    this.compony();
  },
  methods: {
    queryPatent() {
      QueryPatentPage(this.paging).then(res => {
        let d = res.data;
        this.patentData = d.records;
        console.log(this.patentData)
      })
    },
    compony() {
      QueryCompanyPage(this.page).then(res => {
        console.log(res.data.records);
      })
    }
  }
}
</script>

<style scoped>

</style>