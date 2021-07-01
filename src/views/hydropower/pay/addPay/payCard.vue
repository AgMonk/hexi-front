<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>企业</span>
      <span style="float: right; padding: 0;">
      <el-button plain type="primary" @click="visible.addVisible = true">添加</el-button>
      <el-button plain type="warning" @click="paymentpage">水电查询</el-button>
      </span>
    </div>
    <div class="text item">
      <el-table :data="companyPage" @selection-change="selection">
        <el-table-column label="企业名称" prop="name"></el-table-column>
        <el-table-column label="企业地址" prop="address"></el-table-column>
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
      </el-table>
      <el-pagination
          v-if="total >= ifToal"
          :current-page.sync="page.page"
          :page-size.sync="page.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="showAll"
      >
      </el-pagination>
    </div>
    <!--    缴费添加弹窗-->
    <el-dialog :visible.sync="visible.addVisible" title="缴费添加" width="30%">
      <el-form label-width="100px">
        <el-form-item label="缴费金额">
          <el-input v-model="paging.amount"/>
        </el-form-item>
        <el-form-item label="缴费类型">
          <el-select v-model="paging.type" style="width: 100%">
            <el-option value="水费"></el-option>
            <el-option value="电费"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary" @click="paymentAdd">添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>


</template>

<script>
import {PaymentAdd, PaymentSum, QueryCompanyPage} from "../../../../network/output";
import {Unicom} from "../../../../common/utils";

export default {
  name: "payCard",
  data() {
    return {
      companyPage: undefined,
      visible: {
        addVisible: false,
      },
      paging: {
        companyUuid: undefined,
        type: undefined,
        amount: undefined,
      },
      uuid: undefined,
      total: undefined,
      ifToal: undefined,
      page: {
        page: 1,
        size: 5,
      }
    }
  },
  mounted() {
    this.showAll();
    this.update();
    this.paymentSum();
  },

  methods: {
    //接收父组件传参
    update() {
      Unicom.$on('data', (res) => {
        console.log(res);
        this.total = res.data.total;
        this.companyPage = res.data.records;
      })
    },
    showAll() {
      QueryCompanyPage(this.page).then(res => {
        this.companyPage = res.data.records;
        this.total = res.data.total;
        this.ifToal = res.data.total;
        console.log(this.total);
      })
    },
    //获取uuid
    selection(val) {
      this.uuid = val[0] ? val[0].uuid : undefined
      console.log(this.uuid)
    },
    //添加缴费记录
    paymentAdd() {
      this.paging.companyUuid = this.uuid;
      PaymentAdd(this.paging).then(res => {
        console.log(res);
        if (res.code === 2000) {
          this.visible.addVisible = false;
        }
      })
    },
    //查询水电费用
    paymentpage() {
      Unicom.$emit('data1', this.uuid)
    },
    //统计信息
    paymentSum() {
      PaymentSum({data: 1}).then(res => {
        console.log(res)
      })
    },
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