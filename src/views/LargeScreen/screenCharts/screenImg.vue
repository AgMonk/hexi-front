<template>
  <div>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[8]"/>
      </div>
      <!--  8#-->
      <div
          style=" position: absolute; top:180px; left: 180px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[18]"/>
      </div>
      <!--  18# 办公楼-->
      <div
          style=" position: absolute; top:450px; left: 510px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[9]"/>
      </div>
      <!--  9#-->
      <div
          style=" position: absolute; top:340px; left: 520px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[7]"/>
      </div>
      <!--7#-->
      <div
          style=" position: absolute; top:320px; left: 820px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[16]"/>
      </div>
      <!--  16#-->
      <div
          style=" position: absolute; top:150px; left: 840px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[12]"/>
      </div>
      <!--12#-->
      <div
          style=" position: absolute; top:110px; left: 430px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[11]"/>
      </div>
      <!--11#-->
      <div
          style=" position: absolute; top:80px; left: 270px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[15]"/>
      </div>
      <!--15#-->
      <div
          style=" position: absolute; top:80px; left: 680px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[14]"/>
      </div>
      <!--14#-->
      <div
          style=" position: absolute; top:250px; left: 680px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[13]"/>
      </div>
      <!--13#-->
      <div
          style=" position: absolute; top:180px; left: 550px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[6]"/>
      </div>
      <!--6#-->
      <div
          style=" position: absolute; top:250px; left: 1090px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[5]"/>
      </div>
      <!--  5#-->
      <div
          style=" position: absolute; top:220px; left: 1290px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[4]"/>
      </div>
      <!--  4#-->
      <div
          style=" position: absolute; top:330px; left: 1600px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[1]"/>
      </div>
      <!--1#-->
      <div
          style=" position: absolute; top:250px; left: 1720px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[2]"/>
      </div>
      <!--  2#-->
      <div
          style=" position: absolute; top:200px; left: 1610px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[3]"/>
      </div>
      <!--3#-->
      <div
          style=" position: absolute; top:150px; left: 1510px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[17]"/>
      </div>
      <!--3#a  17-->
      <div
          style=" position: absolute; top:120px; left: 1400px; opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[10]"/>
      </div>
      <!--  10#-->
      <div
          style=" position: absolute; top:305px; left: 360px;  opacity: 0; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>
    <!--    摄像头定位-->
    <!--    12-13 -->
    <!--    <svg-camera style="top: 160px; left:400px"-->
    <!--       @click="videoUrl()"></i>-->
    <!--    &lt;!&ndash;   14-7 &ndash;&gt;-->
    <!--    <svg-camera style="top: 320px; left: 680px"-->
    <!--       @click="videoUrl('e34b0b1af98e481ab3830e047144ba0c')"></i>-->
    <!--    &lt;!&ndash;    13-14 &ndash;&gt;-->
    <!--    <svg-camera style="top: 240px; left: 540px"-->
    <!--       @click="videoUrl('42ba358cb1cc4bf3b903018d15e3eacb')"></i>-->
    <!--    &lt;!&ndash;    6-7 &ndash;&gt;-->
    <!--    <svg-camera style="top: 240px; left: 930px"-->
    <!--       @click="videoUrl('95a629b06ddc4e159128f36ec30c3531')"></i>-->
    <!--    &lt;!&ndash; 15-16 &ndash;&gt;-->
    <!--    <svg-camera style="top: 120px; left: 700px"-->
    <!--       @click="videoUrl('617fb012959643d0bfad565eab019d05')"></i>-->
    <!--    &lt;!&ndash; 4-5 &ndash;&gt;-->
    <!--    <svg-camera style="top: 210px; left: 1460px"-->
    <!--       @click="videoUrl('0fd5c554bbd74bebbd88048f059fc259')"></i>-->


    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[8]"/>
      </div>
      <!--  8#-->
      <svg-camera style=" position: absolute; top:280px; left: 240px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[18]"/>
      </div>
      <!--  18# 办公楼-->

      <svg-camera style="position: absolute; top:450px; left: 600px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[9]"/>
      </div>
      <!--  9#-->
      <svg-camera style="position: absolute; top:400px; left: 520px;"/>

    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[7]"/>
      </div>
      <!--7#-->
      <svg-camera style="position: absolute; top:320px; left: 910px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[16]"/>
      </div>
      <!--  16#-->
      <svg-camera style="position: absolute; top:150px; left: 920px;"/>

    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[12]"/>
      </div>
      <!--12#-->
      <svg-camera style=" position: absolute; top:170px; left: 450px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[11]"/>
      </div>
      <!--11#-->
      <svg-camera style=" position: absolute; top:130px; left: 320px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[15]"/>
      </div>
      <!--15#-->
      <svg-camera style="position: absolute; top:140px; left: 690px;"/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[14]"/>
      </div>
      <!--14#-->
      <svg-camera style="position: absolute; top:320px; left: 680px"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[13]"/>
      </div>
      <!--13#-->
      <svg-camera style="position: absolute; top:250px; left: 550px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[6]"/>
      </div>
      <!--6#-->
      <svg-camera style="position: absolute; top:310px; left: 1020px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[5]"/>
      </div>
      <!--  5#-->
      <svg-camera style=" position: absolute; top:190px; left: 1200px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[4]"/>
      </div>
      <!--  4#-->
      <svg-camera style="position: absolute; top:300px; left: 1510px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[1]"/>
      </div>
      <!--1#-->
      <svg-camera style="position: absolute; top:310px; left: 1720px;"/>

    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[2]"/>
      </div>
      <!--  2#-->
      <svg-camera style="position: absolute; top:270px; left: 1610px;"/>

    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[3]"/>
      </div>
      <!--3#-->
      <svg-camera style="position: absolute; top:220px; left: 1510px; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[17]"/>
      </div>
      <!--3#a  17-->
      <svg-camera style="position: absolute; top:170px; left: 1380px;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :number="companyList[10]"/>
      </div>
      <!--  10#-->
      <svg-camera style=" position: absolute; top:420px; left: 360px;"/>
    </el-tooltip>
    <img class="image" height="616" src="../../../assets/img/screen.jpg" width="1891.66"/>
  </div>
</template>

<script>
import Card from "../../../components/card";
import {QueryCompanyStatistics} from "../../../network/output";
import {Unicom} from "../../../common/utils";
import SvgCamera from "../../../components/svgCamera";

export default {
  name: "screenImg",
  components: {SvgCamera, Card},
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
  font-size: 40px;
  color: darkred;
  cursor: pointer;
}
</style>