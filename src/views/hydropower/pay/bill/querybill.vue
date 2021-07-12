<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ name }}</span>
      <span v-if="!name">企业账单</span>
      <span style="float: right; ">
      <el-button plain type="primary" @click="visible = true">修改</el-button>
      <el-button plain type="danger" @click="billDel()">删除</el-button>
      </span>
    </div>
    <div class="text item">
      <el-table :data="list" @select="select" @selection-change="change" @select-all="selectAll">
        <el-table-column label="备注" prop="remark"></el-table-column>
        <el-table-column label="月份" prop="month"></el-table-column>
        <el-table-column label="用量" prop="amount"></el-table-column>
        <el-table-column label="缴费类型" prop="type"></el-table-column>
        <el-table-column label="单价" prop="unitPrice"></el-table-column>
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
      </el-table>
      <el-pagination
          :current-page.sync="paging.page"
          :page-size.sync="paging.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="queryBill"
      >
      </el-pagination>
    </div>
    <!--    修改弹窗-->
    <el-dialog
        :visible.sync="visible"
        title="修改账单"
        width="30%"
    >

      <el-form label-width="100px">
        <el-form-item label="备注">
          <el-input v-model="this.editBill.remark"/>
        </el-form-item>
        <el-form-item label="缴费类型">
          <el-select v-model="editBill.type" style="width: 100%">
            <el-option value="水费"></el-option>
            <el-option value="电费"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="月份">
          <el-date-picker
              v-model="editBill.month"
              placeholder="选择月"
              style="width: 100%"
              type="month"
              value-format="yyyy-MM">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="用量">
          <el-input v-model="editBill.amount"/>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="editBill.unitPrice"/>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary" @click="updateBill()">修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
import {BillDel, QueryBill, UpdateBill,} from "../../../../network/output";
import {Unicom} from "../../../../common/utils";


export default {
  name: "querybill",
  data() {
    return {
      visible: false,
      list: undefined,
      total: undefined,
      paging: {
        page: 1,
        size: 5,
        condition: {
          companyUuid: undefined,
        },
      },
      editBill: {
        uuid: undefined,
        companyUuid: undefined,
        type: undefined,
        month: undefined,
        amount: undefined,
        unitPrice: undefined,
        remark: "",
        priceConstruction: undefined
      },
      uuid: undefined,
      name: "",
    }
  },
  mounted() {
    this.receiveBill();
    this.queryBill();
  },
  methods: {
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

    change(val) {
      this.uuid = val[0] ? val[0].uuid : undefined;
      this.editBill.remark = val[0] ? val[0].remark : undefined;
      this.editBill.uuid = val[0] ? val[0].uuid : undefined;
      this.editBill.companyUuid = val[0] ? val[0].companyUuid : undefined;
      this.editBill.type = val[0] ? val[0].type : undefined;
      this.editBill.month = val[0] ? val[0].month : undefined;
      this.editBill.amount = val[0] ? val[0].amount : undefined;
      this.editBill.unitPrice = val[0] ? val[0].unitPrice : undefined;
    },
    receiveBill() {
      Unicom.$on('data2', res => {
        this.paging.condition.companyUuid = res.uuid;
        this.name = res.name;
        this.queryBill();
      })
    },
    //查询账单
    queryBill() {
      QueryBill(this.paging).then(res => {
        this.list = res.data.records;
        this.total = res.data.total;
        // console.log(this.list)
      })
    },
    //修改账单
    updateBill() {
      UpdateBill(this.editBill).then(res => {
        console.log(res)
      })
    },
    //删除账单
    billDel() {
      let id = this.uuid;
      BillDel(id).then(res => {
        console.log(res)
        this.queryBill();
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