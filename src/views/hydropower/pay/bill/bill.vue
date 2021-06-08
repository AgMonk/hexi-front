<template>
  <el-container>
    <el-header>
      <el-form :inline="true" :model="companyPage">
        <el-form-item label="企业名称">
          <el-input v-model="companyPage.condition.name" placeholder="企业名称"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="componyPage">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>账单查询</span>
              <span style="float: right;">
               <el-button plain type="primary" @click="visible.addVisible = true">添加账单</el-button>
               <el-button plain type="warning" @click="send">查询账单</el-button>
            </span>
            </div>
            <div class="text item">
              <el-table :data="componyData" @selection-change="change">
                <el-table-column label="企业名称" prop="name"></el-table-column>
                <el-table-column label="企业地址" prop="address"></el-table-column>
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
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
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <Querybill/>

        </el-col>
      </el-row>
    </el-main>
    <!--  添加账单弹窗-->
    <el-dialog
        :visible.sync="visible.addVisible"
        title="添加账单" width="30%">

      <el-button @click="addBill(); send()">测试</el-button>
    </el-dialog>
  </el-container>
</template>

<script>
import Querybill from "./querybill";
import {QueryCompanyPage} from "../../../../network/output";
import {Unicom} from "../../../../common/utils";

export default {
  name: "bill",
  components: {Querybill},
  data() {
    return {
      visible: {
        addVisible: false,
      },
      componyData: undefined,
      companyPage: {
        page: 1,
        size: 5,
        condition: {
          name: "",
          address: undefined,
          type: undefined,
          certificationType: undefined,
        },
      },
      total: undefined,

      billData: undefined,
    }
  },
  mounted() {
    this.componyPage();
  },
  methods: {
    //添加账单
    addBill() {
      // AddBill().then(res => {
      //   console.log(res);
      // })
      console.log(111)
    },
    //查询公司
    componyPage() {
      QueryCompanyPage(this.companyPage).then(res => {
        // console.log(res);
        this.componyData = res.data.records;
        this.total = res.data.total;
      });
    },
    //获取选中uuid
    change(val) {
      this.billData = val[0] ? val[0].uuid : undefined;
      console.log(this.billData);
    },
    send() {
      Unicom.$emit('data2', this.billData);
      this.visible.addVisible = false
      console.log(111)
    }
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 600px;
}
</style>