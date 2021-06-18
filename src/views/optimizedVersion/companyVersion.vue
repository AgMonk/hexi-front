<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>公司数据</h3>
    </div>
    <div class="text item">
      <el-form label-width="130px">
        <h3>公司认证数</h3>
        <el-form-item v-for="(company, i) in companyList.countGroupByCertificationType" :key="i"
                      :label="company.certificationType ">
          <el-input v-model="company.count"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>公司类型数</h3>
        <el-form-item v-for="(type, i) in companyList.countGroupByType" :key="i" :label="type.type">
          <el-input v-model="type.count"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>入驻公司数/年</h3>
        <el-form-item v-for="(count, i) in companyList.countGroupByYear" :key="i" :label="count.year + ''">
          <el-input v-model="count.count"/>
        </el-form-item>
      </el-form>
      <el-form label-width="130px">
        <h3>公司总数</h3>
        <el-form-item label="数量">
          <el-input v-model="companyList.totalCount"/>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align: right">
      <el-button type="danger" @click="setCompanyJson">确定修改</el-button>
    </div>
  </el-card>
</template>

<script>
import {getJson, setJson,} from "../../network/output";

export default {
  name: "companyVersion",
  data() {
    return {
      param: {
        type: "Company",
        name: "statistics",
        version: 0,
      },
      companyList: {},
    }
  },
  methods: {
    getcompanyJson() {
      this.param.version = this.version;
      getJson(this.param).then(res => {
        this.companyList = res.data;
        // console.log(this.companyList)
      });
    },
    setCompanyJson() {
      setJson(this.param, this.companyList).then(() => {
      })
    },
  },
  mounted() {
    // this.getcompanyJson();
  },
  watch: {
    "version": {
      handler: function () {
        this.getcompanyJson();
      }
    }
  },
  props: ["version"],
}
</script>

<style scoped>

</style>