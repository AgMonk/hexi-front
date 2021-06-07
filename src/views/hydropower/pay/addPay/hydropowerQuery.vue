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
    </div>
    <!--    缴费修改弹窗-->
    <el-dialog :visible.sync="updateVisible" title="修改" width="30%">
    </el-dialog>
  </el-card>
</template>

<script>
import {Unicom} from "../../../../common/utils";
import {PaymentDel,} from "../../../../network/output";

export default {
  name: "hydropowerQuery",
  data() {
    return {
      hydropowerPage: undefined,
      updateVisible: false,
      selectData: undefined,

      pagePaging: {
        condition: {
          companyUuid: undefined,
          type: undefined,
        }
      },
    }
  },
  mounted() {
    this.receive();
  },
  methods: {
    receive() {
      Unicom.$on('data1', (res => {
        console.log(res);
        this.pagePaging.condition.companyUuid = res;
        // Paymentpage(this.pagePaging).then(res => {
        //   console.log(res)
        // })
      }));
    },
    select(val) {
      console.log(val);
      this.selectData = val;
    },
    del() {
      let id = this.selectData[0].uuid;
      PaymentDel(id).then(res => {
        console.log(res);
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