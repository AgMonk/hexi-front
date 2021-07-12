<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>水电费数据修改</h3>
    </div>
    <div class="text item">
      <el-form>
        <h3>月水电数据</h3>
        <el-form-item v-for="(ranking, i) in billList.amountGroupByTypeMonth" :key="i"
                      :label="ranking.month + ranking.type" label-width="130px">
          <el-input v-model="ranking.amount"></el-input>
        </el-form-item>
      </el-form>
      <el-form v-for="(amountType, i) in billList.topMap" :key="i" label-width="130px">
        <h3>{{ i }}排行</h3>
        <el-form-item v-for="(item, j) in amountType" :key="j" :label="item.companyName">
          <el-input v-model="item.amount"/>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align: right">
      <el-button type="danger" @click="OverWrite">恢复</el-button>
      <el-button type="danger" @click="SetJson">确定修改</el-button>
    </div>
  </el-card>
</template>

<script>
import {getJson, overWrite, setJson} from "../../network/output";

export default {
  name: "billVersion",
  data() {
    return {
      param: {
        type: "Bill",
        name: "statistics",
        // version: 0,
      },
      billList: {},
    }
  },
  methods: {

    GetJson() {
      this.param.version = this.bill;
      getJson(this.param,).then(res => {
        this.billList = res.data;
        // console.log(this.param.version)
      }).catch(() => {
        this.GetJson()
      })
    },
    //修改数据
    SetJson() {
      setJson(this.param, this.billList).then(res => {
        console.log(res)
        this.GetJson();
      })
    },
    OverWrite() {
      overWrite(this.param).then(res => {
        console.log(res)
        this.GetJson();
      })
    },

  },
  mounted() {
    if (!this.watch) {
      this.GetJson();
    }
  },
  watch: {
    "bill": {
      handler: function () {
        this.GetJson();
      }
    }
  },
  props: ["bill"],
}
</script>

<style scoped>

</style>