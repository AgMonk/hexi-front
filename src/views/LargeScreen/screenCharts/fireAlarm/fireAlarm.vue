<template>
  <div>
    <el-button
        style="font-size: 40px; position: absolute; top: -60px; color: #FFFFFF; right: 0px "
        type="text">
      <span v-if="status.alarmStatus === 1 "><i class="el-icon-bell"/> 火警状态正常</span>
      <span v-if="status.alarmStatus === 0 " style="color: red"><i class="el-icon-bell"/>火警状态异常</span>
    </el-button>
    <!--  8#-->
    <svg-icon v-if="status.status8 === 0" style=" position: absolute; top:180px; left: 230px; "/>
    <!--  10#-->
    <svg-icon v-if="status.status10 === 0" style=" position: absolute; top:300px; left: 360px; "/>
    <!--  18# 办公楼-->
    <svg-icon v-if="status.status18 === 0" style=" position: absolute; top:400px; left: 560px; "/>
    <!--  9#-->
    <svg-icon v-if="status.status9 === 0" style=" position: absolute; top:320px; left: 510px; "/>
    <!--7#-->
    <svg-icon v-if="status.status7 === 0" style=" position: absolute; top:330px; left: 810px; "/>
    <!--  16#-->
    <svg-icon v-if="status.status16 === 0" style=" position: absolute; top:130px; left: 910px; "/>
    <!--12#-->
    <svg-icon v-if="status.status12 === 0" style=" position: absolute; top:130px; left: 410px; "/>
    <!--11#-->
    <svg-icon v-if="status.status11 === 0" style=" position: absolute; top:50px; left: 300px; "/>
    <!--15#-->
    <svg-icon v-if="status.status15 === 0" style=" position: absolute; top:50px; left: 700px; "/>
    <!--14#-->
    <svg-icon v-if="status.status14 === 0" style=" position: absolute; top:250px; left: 700px; "/>
    <!--13#-->
    <svg-icon v-if="status.status13 === 0" style=" position: absolute; top:150px; left: 550px; "/>
    <!--6#-->
    <svg-icon v-if="status.status6 === 0" style=" position: absolute; top:250px; left: 1100px; "/>
    <!--  5#-->
    <svg-icon v-if="status.status5 === 0" style=" position: absolute; top:250px; left: 1380px; "/>
    <!--  4#-->
    <svg-icon v-if="status.status4 === 0" style=" position: absolute; top:300px; left: 1550px; "/>
    <!--1#-->
    <svg-icon v-if="status.status1 === 0" style=" position: absolute; top:250px; left: 1720px; "/>
    <!--  2#-->
    <svg-icon v-if="status.status2 === 0" style=" position: absolute; top:200px; left: 1610px; "/>
    <!--3#-->
    <svg-icon v-if="status.status3 === 0" style=" position: absolute; top:150px; left: 1500px; "/>
    <!--3#a  17-->
    <svg-icon v-if="status.status17 === 0" style=" position: absolute; top:120px; left: 1400px; "/>

  </div>
</template>

<script>
import {getStatus} from "../../../../network/output";
import SvgIcon from "./svgIcon";

export default {
  name: "fireAlarm",
  components: {SvgIcon},
  data() {
    return {
      switch: false,
      status: {},
      timer: null
    }
  },
  methods: {
    GetStatus() {
      getStatus({showMessage: 1}).then(res => {
        this.status = res.data;
        // console.log(this.status)
      })
    },
  },
  mounted() {
    this.GetStatus();
    this.timer = setInterval(() => {
      this.GetStatus()
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
}
</script>

<style scoped>

</style>