<template>
  <el-container>
    <el-header>
      <div style="text-align: right">
        <el-button plain type="success">查询专利&补贴</el-button>
        <el-button plain type="primary">修改企业</el-button>
        <el-button plain type="danger">删除企业</el-button>
      </div>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <company-table type="大规模企业"/>
        <company-table type="中小微企业"/>
      </el-row>
      <br><br>
      <el-row :gutter="20">
        <company-table type="高新技术企业"/>
        <company-table type="科技型中小企业"/>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import CompanyTable from "./newcomponents/company-table";

export default {
  name: "newCompony",
  components: {
    CompanyTable,
  },
  data() {
    return {
      componyDATA: undefined,
      compony: undefined,
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

    // toChild() {
    //   let uuid = this.componyDATA[0].uuid;
    //   this.$router.push({
    //     path: '/hatch/compony',
    //     query: {
    //       id: uuid,
    //     }
    //   })
    // },


  }
}
</script>

<style scoped>

</style>