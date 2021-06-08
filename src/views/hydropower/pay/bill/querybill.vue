<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <span style="float: right; ">
      <el-button>操作按钮</el-button>
      <el-button>操作按钮</el-button>
      </span>
    </div>
    <div class="text item">
      <el-table :data="list" @selection-change="change">
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
  </el-card>
</template>

<script>
import {QueryBill,} from "../../../../network/output";
import {Unicom} from "../../../../common/utils";


export default {
  name: "querybill",
  data() {
    return {
      list: undefined,
      total: undefined,
      paging: {
        page: 1,
        size: 5,
        condition: {
          companyUuid: undefined,
        },
      },
    }
  },
  mounted() {
    this.receiveBill();
    this.queryBill();
  },
  methods: {
    change(val) {
      console.log(val)
    },
    receiveBill() {
      Unicom.$on('data2', res => {
        this.paging.condition.companyUuid = res;
        this.queryBill();
      })
    },
    //查询账单
    queryBill() {
      QueryBill(this.paging).then(res => {
        this.list = res.data.records;
        this.total = res.data.total;
        console.log(this.list)
      })
    },
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