<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>水电缴费记录</span>
      <span style="float: right">
      <el-button plain type="primary" @click="updateVisible = true">修改</el-button>
      <el-button plain type="danger" @click="del">删除</el-button>
      </span>
    </div>
    <div class="text item">
      <el-table :data="hydropowerPage" @selection-change="select">
        <el-table-column label="缴费类型" prop="type"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
        <!--        <el-table-column label="时间" prop="companyUuid"></el-table-column>-->
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
      </el-table>
      <el-pagination
          :current-page.sync="pagePaging.page"
          :page-size.sync="pagePaging.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="page"
      >
      </el-pagination>
    </div>
    <!--    缴费修改弹窗-->
    <el-dialog :visible.sync="updateVisible" title="修改缴费" width="30%">

      <el-form label-width="100px">
        <el-form-item label="金额">
          <el-input v-model="updateData.amount"/>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="updateData.type"/>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary" @click="paymentUpdate">修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
import {Unicom} from "../../../../common/utils";
import {PaymentDel, Paymentpage, PaymentUpdate} from "../../../../network/output";

export default {
  name: "hydropowerQuery",
  data() {
    return {
      hydropowerPage: undefined,
      updateVisible: false,

      total: undefined,
      pagePaging: {
        page: 1,
        size: 5,
        condition: {
          companyUuid: undefined,
          type: undefined,
        }
      },
      updateData: {
        amount: undefined,
        type: undefined,
        uuid: undefined,
        companyUuid: undefined
      },
    }
  },
  mounted() {
    this.receive();
  },
  methods: {
    paymentUpdate() {
      PaymentUpdate(this.updateData).then(res => {
        console.log(res);
        this.updateVisible = false;
        this.page();
      })
    },
    receive() {
      Unicom.$on('data1', (val => {
        this.pagePaging.condition.companyUuid = val;
        this.page();
      }))
    },
    page() {
      Paymentpage(this.pagePaging).then(res => {
        this.hydropowerPage = res.data.records;
        this.total = res.data.total;
      })
    },
    select(val) {
      this.updateData.amount = val[0] ? val[0].amount : undefined;
      this.updateData.type = val[0] ? val[0].type : undefined;
      this.updateData.uuid = val[0] ? val[0].uuid : undefined;
      this.updateData.companyUuid = val[0] ? val[0].companyUuid : undefined;
      console.log(this.updateData.amount)
    },
    update() {

    },
    del() {
      let id = this.updateData ? this.updateData.uuid : undefined;
      PaymentDel(id).then(res => {
        console.log(res);
        this.page();
      })
    }
  }
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