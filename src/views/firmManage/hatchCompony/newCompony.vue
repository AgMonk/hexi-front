<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12">
          <el-form :inline="true" :model="companyPage">
            <el-form-item label="企业名称">
              <el-input v-model="companyPage.condition.name" placeholder="企业名称"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="componyPage">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div style="text-align: right">
            <el-button plain type="success" @click="toChild">查询专利&补贴</el-button>
            <el-button plain type="success" @click="visible.visible = true">添加企业</el-button>
            <el-button v-if="componyData" plain type="primary" @click="editCompony">修改企业</el-button>
            <el-button v-if="componyData" plain type="danger" @click="dele">删除企业</el-button>
          </div>
        </el-col>
      </el-row>
      <!--      添加企业弹窗-->
      <el-dialog
          :visible.sync="visible.visible"
          title="添加企业"
          width="30%">
        <compony-from @success="visible.visible = false"/>
      </el-dialog>
      <!--      修改企业弹窗-->
      <el-dialog :visible.sync="visible.editVisble" title="修改企业" width="30%">
        <new-compony-form :selection="selection" @success="visible.editVisble = false"/>
      </el-dialog>
    </el-header>
    <el-main v-if="!componyData">
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
    <el-main v-if="componyData">
      <el-table
          ref="multipleTable"
          :data="componyData"
          @select="select"
          @select-all="selectAll"
          @selection-change="choice"
      >
        <el-table-column label="企业名称" prop="name"></el-table-column>
        <el-table-column label="企业地址" prop="address"></el-table-column>
        <el-table-column label="企业所在楼栋" prop="buildingIndex"></el-table-column>
        <el-table-column label="联系电话" prop="phone"></el-table-column>
        <el-table-column label="企业类型" prop="type"></el-table-column>
        <el-table-column label="认证类型" prop="certificationType"></el-table-column>
        <el-table-column type="selection"></el-table-column>
      </el-table>
      <el-pagination
          :current-page.sync="companyPage.page"
          :page-size.sync="companyPage.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="componyPage"
      >
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
import CompanyTable from "./newcomponents/company-table";
import ComponyFrom from "./ComponyFrom";
import NewComponyForm from "./newcomponents/compony/newComponyForm";
import {deleteCompony, QueryCompanyPage} from "../../../network/output";

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
      selection: {},
      companyPage: {
        page: 1,
        size: 5,
        condition: {
          name: "",
        },
      },
      componyData: undefined,
      total: ""
    }
  },
  methods: {
    componyPage() {
      QueryCompanyPage(this.companyPage).then(res => {
        console.log(res.data.records);
        this.componyData = res.data.records;
        this.total = res.data.total;
      });
    },
    dele() {
      let d = this.selection ? this.selection.uuid : {}
      this.$confirm('此操作将永久删除该公司所有数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCompony(d).then(() => {
          if (this.componyData) {
            this.componyPage();
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    choice(e) {
      this.choose = e[0] ? e[0].uuid : undefined
      console.log(e)
      this.selection = e[0];
    },
    toChild() {
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
  }
}
</script>

<style scoped>

</style>