<template>
  <el-container>
    <el-header>
      <!--      <el-button style="float: right">创建时间：{{nowVersion.timestamp.timeString}}</el-button>-->
      <el-button style="float: right">当前版本：{{ param.version }}</el-button>
      <el-form :inline="true">
        <el-form-item label="版本切换">
          <el-select v-model="param.version" @change="SetVersion">
            <el-option
                v-for="item in versionLists"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建版本">
          <el-input v-model="versionId" placeholder="需输入整数数字"></el-input>
        </el-form-item>
        <el-button style="margin-right: 20px" type="danger" @click="CeateVersion();">创建</el-button>

        <el-form-item label="删除版本">
          <el-select v-model="delId">
            <el-option
                v-for="item in delIds"
                :key="item"
                :label="item"
                :value="item">
            </el-option>

          </el-select>
        </el-form-item>

        <el-button type="danger" @click="DelVersion();">删除</el-button>
      </el-form>

    </el-header>

    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="水电数据" name="bill">

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
              <el-button type="danger" @click="SetJson">确定修改</el-button>
            </div>
          </el-card>

        </el-tab-pane>
        <el-tab-pane label="公司数据" name="Company">
          <company-version :version="param.version"/>
        </el-tab-pane>
        <el-tab-pane label="专利数据" name="Patent">
          <patent-version :patent="param.version"/>
        </el-tab-pane>
        <el-tab-pane label="补贴数据" name="Subsidy">
          <subsidy-version :subsidy="param.version"/>
        </el-tab-pane>
      </el-tabs>

    </el-main>
  </el-container>
</template>

<script>
import {
  createVersion,
  delVersion,
  getJson,
  getVersion,
  overWrite,
  setJson,
  setVersion,
  versionList
} from "../../network/output";
import CompanyVersion from "./companyVersion";
import PatentVersion from "./patentVersion";
import SubsidyVersion from "./subsidyVersion";

export default {
  name: "optimizedVersion",
  components: {SubsidyVersion, PatentVersion, CompanyVersion},
  data() {
    return {
      param: {
        type: "Bill",
        name: "statistics",
        version: 0,
      },
      nowVersion: {},
      versionLists: undefined,
      versionId: "",
      delIds: undefined,
      delId: undefined,
      //账单数据
      billList: {},
      activeName: 'bill',
    }
  },
  methods: {
    //获取版本
    GetVersion() {
      getVersion().then(res => {
        // console.log(res);
        this.param.version = res.data.id;
        this.GetJson();
      })
    },

    //切换版本
    SetVersion(val) {
      setVersion(val).then(() => {
        this.GetJson();
      })
    },

    //获取版本列表
    VersionList() {
      versionList().then(res => {
        this.versionLists = res.data;
        this.delIds = res.data;
        // console.log(this.versionLists);
      })
    },
    //创建新版本
    CeateVersion() {
      createVersion(this.versionId).then(() => {
        // console.log(res)
      })
    },
    //删除版本
    DelVersion() {
      delVersion(this.delId).then(() => {
        // console.log(res)
      })
    },

    //获取数据
    GetJson() {
      getJson(this.param).then(res => {
        this.billList = res.data;
        // console.log(this.param.version)
      })
    },

    //修改数据
    SetJson() {
      setJson(this.param, this.billList).then(res => {
        console.log(res)
      })
    },

    //覆盖数据
    OverWrite() {
      overWrite(this.param).then(res => {
        console.log(res)
      })
    },
    handleClick(name) {
      // console.log(name.name)
      name
    }
  },

  mounted() {
    this.GetVersion();
    // this.GetJson();
    // this.SetJson();
    // this.OverWrite();

    this.VersionList();
    // this.CeateVersion();
    // this.DelVersion();
  }
}
</script>

<style scoped>

</style>