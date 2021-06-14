<template>
  <el-container>
    <!--  direction horizontal -->
    <el-header height="95px">
      <el-row :gutter="20">
        <el-col :span="8">
          <div style=" background: #409EFF">11</div>
        </el-col>
        <el-col :span="10"><h1 class="header">柳州天步科技创业园智慧园区管理系统</h1></el-col>
        <el-col :span="6">
          <div style=" background: #409EFF">11</div>
        </el-col>
      </el-row>
    </el-header>
    <br>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="Hallmark item"></div>
        </el-col>
        <el-col :span="3">
          <div class="Hallmark item">
            <compony-chart/>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="main">
            <!--            <p style="font-size: 40px; position: absolute; top: -100px">测试</p>-->
            <el-button
                icon="el-icon-warning" style="font-size: 40px; position: absolute; top: -100px"
                type="text"
            >火灾状态正常
            </el-button>
            <div style="
height: 40px;width: 40px;background: #D9534F;position: absolute; top:200px; left: 200px; border-radius: 50%;
"></div>
            <img class="image" height="616" src="../../assets/img/screen.png" width="1891.66"/>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="Hallmark item">
            <hydropower-chart/>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="Hallmark item"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="7">
          <div id="rectangle" class="Hallmark">
            <div class="left-bottom">
              <patent-chart/>
            </div>
            <div class="left-bottom">
              <subsidy-chart/>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="bottom">
            <div class="small">
              <el-container>
                <el-header><h1 class="typeTitle">企业类型</h1></el-header>
                <el-main>
                  <screen-type/>
                </el-main>
              </el-container>
            </div>
            <div class="small">
              <el-container>
                <el-header><h1 class="typeTitle">企业认证</h1></el-header>
                <el-main>
                  <authentication-chart/>
                </el-main>
              </el-container>
            </div>
            <div class="small">
              <el-container>
                <el-header><h1 class="typeTitle">专利状态</h1></el-header>
                <el-main>
                  <patent-status-chart/>
                </el-main>
              </el-container>
            </div>
            <div class="small">
              <el-container>
                <el-header><h1 class="typeTitle">车位信息</h1></el-header>
                <parking-chart/>
              </el-container>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="Hallmark right"></div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ComponyChart from "./screenCharts/componyChart";
import screenType from "./screenCharts/screenType";
import HydropowerChart from "./screenCharts/hydropowerChart";
import PatentChart from "./screenCharts/patentChart";
import SubsidyChart from "./screenCharts/subsidyChart";
import AuthenticationChart from "./screenCharts/authenticationChart";
import ParkingChart from "./screenCharts/parkingChart";
import PatentStatusChart from "./screenCharts/patentStatusChart";

export default {
  name: "screen",
  components: {
    PatentStatusChart,
    ParkingChart, AuthenticationChart, SubsidyChart, PatentChart, HydropowerChart, ComponyChart, screenType
  },
  data() {
    return {}
  },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#45646A')
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style scoped>
.typeTitle {
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
}

.header {
  font-size: 60px;
  text-align: center;
  color: #FFFFFF;
}

.image {
  border: 2px #5AB1EF solid;
  border-radius: 15px;
}

.Hallmark {
  height: 500px;
  border: 1px #5AB1EF solid;
}

.Hallmark.item {
  height: 570px;
}

.bottom {
  /*border: 1px #5AB1EF solid;*/
  height: 400px;
  display: flex;
}

.main, .bottom {
  position: relative;
  top: 100px;
}

.Hallmark.right {
  background: #0F373F;
}

#rectangle {
  display: flex;
}

.bottom > .small {
  height: 350px;
  background: #0F373F;
  flex: 1;
  margin: 5px;
  margin-top: 50px;
  border: 1px #5AB1EF solid;
}

.left-bottom {
  flex: 1;
}
</style>