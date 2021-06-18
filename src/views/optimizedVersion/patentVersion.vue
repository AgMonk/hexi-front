<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>专利数据</h3>
    </div>
    <div class="text item">
      <!--      <el-button @click="getPatentJson"></el-button>-->
      <el-form label-width="130px">
        <h3>新增专利数/年</h3>
        <el-form-item v-for="(patent, i) in patentList.countGroupByYear" :key="i" :label="patent.year + ''">
          <el-input v-model="patent.count"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>专利类型</h3>
        <el-form-item v-for="(patent, i) in patentList.countGroupByType" :key="i" :label="patent.type">
          <el-input v-model="patent.count"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>专利状态</h3>
        <el-form-item v-for="(patent, i) in patentList.countGroupByStatus" :key="i" :label="patent.status">
          <el-input v-model="patent.count"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>专利总数</h3>
        <el-form-item label="专利总数">
          <el-input v-model="patentList.totalCount"/>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align: right">
      <el-button type="danger" @click="setPatentJson">确定修改</el-button>
    </div>
  </el-card>
</template>

<script>
import {getJson, setJson} from "../../network/output";

export default {
  name: "patentVersion",
  data() {
    return {
      param: {
        type: "Patent",
        name: "statistics",
        version: 0,
      },
      patentList: {},
    }
  },
  methods: {
    getPatentJson() {
      this.param.version = this.patent;
      getJson(this.param).then(res => {
        this.patentList = res.data;
        console.log(res)
      })
    },
    setPatentJson() {
      setJson(this.param, this.patentList)
    }
  },
  watch: {
    "patent": {
      handler: function () {
        this.getPatentJson();
      }
    }
  },
  props: ["patent"]
}
</script>

<style scoped>

</style>