<template>
  <el-container>
    <el-header>
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
        <el-button style="margin-right: 20px" type="danger" @click="CeateVersion(); ">创建</el-button>

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
        <el-button type="danger" @click="DelVersion(); delId = undefined">删除</el-button>
      </el-form>
    </el-header>
    <el-main>
      <el-tabs v-if="show" v-model="activeName">
        <el-tab-pane label="水电数据" name="bill">
          <bill-version :bill="param.version"/>
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
import {createVersion, delVersion, getVersion, overWrite, setVersion, versionList} from "../../network/output";
import CompanyVersion from "./companyVersion";
import PatentVersion from "./patentVersion";
import SubsidyVersion from "./subsidyVersion";
import BillVersion from "./billVersion";

export default {
  name: "optimizedVersion",
  components: {BillVersion, SubsidyVersion, PatentVersion, CompanyVersion},
  data() {
    return {
      show: false,
      param: {
        version: 0,
      },
      nowVersion: {},
      versionLists: undefined,
      versionId: "",
      delIds: undefined,
      delId: undefined,
      activeName: 'bill',
    }
  },
  methods: {
    // 获取版本
    GetVersion() {
      getVersion().then(res => {
        this.param.version = res.data.id;
        this.show = true;
      })
    },

    //切换版本
    SetVersion(val) {
      setVersion(val).then(() => {
      })
    },

    //获取版本列表
    VersionList() {
      versionList().then(res => {
        this.versionLists = res.data;
        this.delIds = res.data;
      })
    },
    //创建新版本
    CeateVersion() {
      createVersion(this.versionId).then(() => {
        this.VersionList();
        this.param.version = this.versionId;
        this.versionId = undefined;
      })
    },
    //删除版本
    DelVersion() {
      delVersion(this.delId).then(() => {
        this.VersionList();
        let id = 0;
        setVersion(id).then(() => {
          this.param.version = id;
        })
      })
    },
    //覆盖数据
    OverWrite() {
      overWrite(this.param).then(res => {
        console.log(res)
      })
    },

  },

  mounted() {
    this.GetVersion();
    //
    this.VersionList();
  }
}
</script>

<style scoped>

</style>