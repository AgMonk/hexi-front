<template>
  <el-container>
    <el-header>
      <div style="text-align: right">
        <el-button plain type="success" @click="toChild">查询专利&补贴</el-button>
        <el-button plain type="primary">修改企业</el-button>
        <el-button plain type="danger">删除企业</el-button>
      </div>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <company-table type="大规模企业" @selection-change="choice"/>
        <company-table type="中小微企业" @selection-change="choice"/>
      </el-row>
      <br><br>
      <el-row :gutter="20">
        <company-table type="高新技术企业" @selection-change="choice"/>
        <company-table type="科技型中小企业" @selection-change="choice"/>
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
      choose: undefined,
    }
  },
  methods: {

    choice(e) {
      // console.log(e[0].uuid);
      this.choose = e[0].uuid
      console.log(this.choose)
    },
    toChild() {
      // let uuid = this.componyDATA[0].uuid;
      this.$router.push({
        path: '/hatch/compony',
        query: {
          id: this.choose,
        }
      })
    },


  }
}
</script>

<style scoped>

</style>