<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>企业</span>
      <span style="float: right; padding: 0;">
      <el-button plain type="primary" @click="visible.addVisible = true">添加</el-button>
      <el-button plain type="warning">修改</el-button>
      <el-button plain type="danger">删除</el-button>
      </span>
    </div>
    <div class="text item">
      <el-table :data="companyPage" @selection-change="selection">
        <el-table-column label="企业名称" prop="name"></el-table-column>
        <el-table-column label="企业地址" prop="address"></el-table-column>
        <el-table-column label="企业类型" prop="type"></el-table-column>
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="visible.addVisible" title="缴费添加" width="30%">
      <el-form label-width="100px">
        <el-form-item label="缴费金额">
          <el-input/>
        </el-form-item>
        <el-form-item label="缴费类型">
          <el-input/>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary">添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
import {QueryCompanyPage} from "../../../../network/output";
import {Unicom} from "../../../../common/utils";

export default {
  name: "payCard",
  data() {
    return {
      companyPage: undefined,
      visible: {
        addVisible: false,
      },
    }
  },
  mounted() {
    this.showAll();
    this.update();

  },

  methods: {
    update() {
      Unicom.$on('data', (res) => {
        console.log(res);
        this.companyPage = res.data.records;
      })
    },
    showAll() {
      let page = 1, size = 5;
      QueryCompanyPage({page, size}).then(res => {
        this.companyPage = res.data.records;
        // console.log(this.companyPage);
      })
    },
    selection(val) {
      console.log(val)
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
  width: 480px;
}
</style>