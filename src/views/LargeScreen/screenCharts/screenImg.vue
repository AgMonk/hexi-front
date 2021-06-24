<template>
  <div>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="8"/>
      </div>
      <!--  8#-->
      <div style=" position: absolute; top:180px; left: 200px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="18"/>
      </div>
      <!--  18# 办公楼-->
      <div style=" position: absolute; top:450px; left: 500px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="9"/>
      </div>
      <!--  9#-->
      <div style=" position: absolute; top:340px; left: 520px; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="7"/>
      </div>
      <!--7#-->
      <div style=" position: absolute; top:320px; left: 850px; height: 60px; width: 60px; background: #FFFFFF; "/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="16"/>
      </div>
      <!--  16#-->
      <div style=" position: absolute; top:150px; left: 870px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="12"/>
      </div>
      <!--12#-->
      <div style=" position: absolute; top:120px; left: 450px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="11"/>
      </div>
      <!--11#-->
      <div style=" position: absolute; top:80px; left: 300px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="15"/>
      </div>
      <!--15#-->
      <div style=" position: absolute; top:80px; left: 720px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="14"/>
      </div>
      <!--14#-->
      <div style=" position: absolute; top:250px; left: 700px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="13"/>
      </div>
      <!--13#-->
      <div style=" position: absolute; top:180px; left: 570px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="6"/>
      </div>
      <!--6#-->
      <div style=" position: absolute; top:250px; left: 1100px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="5"/>
      </div>
      <!--  5#-->
      <div style=" position: absolute; top:220px; left: 1300px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="4"/>
      </div>
      <!--  4#-->
      <div style=" position: absolute; top:330px; left: 1620px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="1"/>
      </div>
      <!--1#-->
      <div style=" position: absolute; top:250px; left: 1720px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="2"/>
      </div>
      <!--  2#-->
      <div style=" position: absolute; top:200px; left: 1610px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="3"/>
      </div>
      <!--3#-->
      <div style=" position: absolute; top:150px; left: 1510px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>

    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card :num="17"/>
      </div>
      <!--3#a  17-->
      <div style=" position: absolute; top:120px; left: 1420px; height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>
    <el-tooltip effect="light" placement="right">
      <div slot="content">
        <card num="10"/>
      </div>
      <!--      10#-->
      <div style=" position: absolute; top:300px; left: 360px;  height: 60px; width: 60px; background: #FFFFFF;"/>
    </el-tooltip>


    <img class="image" height="616" src="../../../assets/img/screen.png" width="1891.66"/>
  </div>
</template>

<script>
import Card from "../../../components/card";

export default {
  name: "screenImg",
  components: {Card},
  data() {
    return {
      companyList: []
    }
  },
  methods: {},
  mounted() {

  }
}
</script>

<style scoped>

</style>