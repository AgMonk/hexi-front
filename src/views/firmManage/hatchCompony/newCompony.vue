<template>
  <el-container>
    <el-header>
      <div style="text-align: right">
        <el-button plain type="success" @click="toChild">查询专利&补贴</el-button>
        <el-button plain type="success" @click="visible.visible = true">添加企业</el-button>
        <el-button plain type="primary" @click="editCompony">修改企业</el-button>
        <el-button plain type="danger">删除企业</el-button>
      </div>
      <!--      添加企业弹窗-->
      <el-dialog
          :visible.sync="visible.visible"
          title="添加企业"
          width="30%">
        <compony-from/>
      </el-dialog>
      <!--      修改企业弹窗-->
      <el-dialog :visible.sync="visible.editVisble" title="修改企业" width="30%">
        <new-compony-form :selection="selection"/>
      </el-dialog>
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
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import CompanyTable from "./newcomponents/company-table";
import ComponyFrom from "./ComponyFrom";
import NewComponyForm from "./newcomponents/compony/newComponyForm";

export default {
  name: "newCompony",
  components: {
    NewComponyForm,
    CompanyTable,
    ComponyFrom,
  },
  data() {
    return {
      choose: undefined,
      visible: {
        visible: false,
        editVisble: false,
      },
      selection: undefined,
    }
  },
  methods: {
    choice(e) {
      this.choose = e[0].uuid
      this.selection = e[0];
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
    editCompony() {
      this.visible.editVisble = true;
    },

  }
}
</script>

<style scoped>

</style>