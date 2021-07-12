<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>补贴数据</h3>
    </div>
    <div class="text item">
      <el-form label-width="130px">
        <h3>补贴金额/年</h3>
        <el-form-item v-for="(subsidy, i) in subdisyList.sumGroupByYear" :key="i" :label="subsidy.year + ''">
          <el-input v-model="subsidy.sum"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>补贴金额总数</h3>
        <el-form-item label="总数">
          <el-input v-model="subdisyList.sum"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>补贴金额/月</h3>
        <el-form-item v-for="(subsidy, i) in subdisyList.sumGroupByMonth" :key="i" :label="subsidy.month + ''">
          <el-input v-model="subsidy.sum"/>
        </el-form-item>
      </el-form>
      <div style="text-align: right">
        <el-button type="danger" @click="OverWrite">恢复</el-button>
        <el-button type="danger" @click="setSubsidyJson">确定修改</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import {getJson, overWrite, setJson} from "../../network/output";

export default {
  name: "subsidyVersion",
  data() {
    return {
      param: {
        type: "Subsidy",
        name: "statistics",
        version: 0,
      },
      subdisyList: {},
    }
  },
  methods: {
    getSubsidyJson() {
      this.param.version = this.subsidy;
      getJson(this.param).then(res => {
        this.subdisyList = res.data;
        // console.log(this.subdisyList)
      }).catch(() => {
        this.getSubsidyJson()
      })
    },
    setSubsidyJson() {
      setJson(this.param, this.subdisyList).then(() => {
        this.getSubsidyJson();
      })
    },
    OverWrite() {
      overWrite(this.param).then(res => {
        console.log(res)
        this.getSubsidyJson();
      })
    },
  },
  watch: {
    "subsidy": {
      handler: function () {
        this.getSubsidyJson();
      }
    }
  },
  mounted() {
    if (!this.watch) {
      this.getSubsidyJson();
    }
  },
  props: ["subsidy"]
}
</script>

<style scoped>

</style>