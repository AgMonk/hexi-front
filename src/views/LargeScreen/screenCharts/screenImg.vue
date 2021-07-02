<template>
  <div>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[8]"/>
      </div>
      <!--  8#-->
      <div
          style=" position: absolute; top:180px; left: 200px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[18]"/>
      </div>
      <!--  18# 办公楼-->
      <div
          style=" position: absolute; top:450px; left: 500px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[9]"/>
      </div>
      <!--  9#-->
      <div
          style=" position: absolute; top:340px; left: 520px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[7]"/>
      </div>
      <!--7#-->
      <div
          style=" position: absolute; top:320px; left: 850px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[16]"/>
      </div>
      <!--  16#-->
      <div
          style=" position: absolute; top:150px; left: 870px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[12]"/>
      </div>
      <!--12#-->
      <div
          style=" position: absolute; top:120px; left: 450px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[11]"/>
      </div>
      <!--11#-->
      <div
          style=" position: absolute; top:80px; left: 300px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[15]"/>
      </div>
      <!--15#-->
      <div
          style=" position: absolute; top:80px; left: 720px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[14]"/>
      </div>
      <!--14#-->
      <div
          style=" position: absolute; top:250px; left: 700px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[13]"/>
      </div>
      <!--13#-->
      <div
          style=" position: absolute; top:180px; left: 570px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[6]"/>
      </div>
      <!--6#-->
      <div
          style=" position: absolute; top:250px; left: 1100px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[5]"/>
      </div>
      <!--  5#-->
      <div
          style=" position: absolute; top:220px; left: 1300px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[4]"/>
      </div>
      <!--  4#-->
      <div
          style=" position: absolute; top:330px; left: 1620px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[1]"/>
      </div>
      <!--1#-->
      <div
          style=" position: absolute; top:250px; left: 1720px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[2]"/>
      </div>
      <!--  2#-->
      <div
          style=" position: absolute; top:200px; left: 1610px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[3]"/>
      </div>
      <!--3#-->
      <div
          style=" position: absolute; top:150px; left: 1510px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[17]"/>
      </div>
      <!--3#a  17-->
      <div
          style=" position: absolute; top:120px; left: 1420px; height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[10]"/>
      </div>
      <!--  10#-->
      <div
          style=" position: absolute; top:300px; left: 360px;  height: 60px; width: 60px; background: #FFFFFF; opacity: 0;"/>
    </el-tooltip>
    <!--    摄像头定位-->
    <!--    12-13 -->
    <i class="el-icon-video-camera" style="top: 160px; left:400px"
       @click="videoUrl('7d564aed51d04c3d98ba71df2d7d1e3b')"></i>
    <!--   14-7 -->
    <i class="el-icon-video-camera" style="top: 320px; left: 680px"
       @click="videoUrl('e34b0b1af98e481ab3830e047144ba0c')"></i>
    <!--    13-14 -->
    <i class="el-icon-video-camera" style="top: 240px; left: 540px"
       @click="videoUrl('42ba358cb1cc4bf3b903018d15e3eacb')"></i>
    <!--    6-7 -->
    <i class="el-icon-video-camera" style="top: 240px; left: 930px"
       @click="videoUrl('95a629b06ddc4e159128f36ec30c3531')"></i>
    <!-- 15-16 -->
    <i class="el-icon-video-camera" style="top: 120px; left: 700px"
       @click="videoUrl('617fb012959643d0bfad565eab019d05')"></i>
    <!-- 4-5 -->
    <i class="el-icon-video-camera" style="top: 210px; left: 1460px"
       @click="videoUrl('0fd5c554bbd74bebbd88048f059fc259')"></i>

    <img class="image" height="616" src="../../../assets/img/screen.png" width="1891.66"/>
  </div>
</template>

<script>
import Card from "../../../components/card";
import {QueryCompanyStatistics} from "../../../network/output";
import {Unicom} from "../../../common/utils";

export default {
  name: "screenImg",
  components: {Card},
  data() {
    return {
      companyList: []
    }
  },
  methods: {
    companyIndex() {
      QueryCompanyStatistics({showMessage: 1}).then(res => {
        this.companyList = res.data.listGroupByBuildingIndex
      })
    },
    videoUrl(id) {
      Unicom.$emit('videoIndex', id)
    }
  },
  created() {
    this.companyIndex()
  },
  mounted() {
  }
}
</script>

<style scoped>
.el-icon-video-camera {
  font-size: 100px;
  color: darkred;
  position: absolute;
  cursor: pointer;
}
</style>