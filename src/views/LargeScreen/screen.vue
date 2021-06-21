<template>
  <el-container>
    <!--  direction horizontal -->
    <el-header height="95px">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <environmental-testing/>
          </div>
        </el-col>
        <el-col :span="10"><h1 class="header">柳州天步科技创业园智慧园区管理系统</h1></el-col>
        <el-col :span="6">
          <div style=" background: #45646A; text-align: right; font-size: 40px; font-weight: 600; color: #FFFFFF">
            欢迎领导视察工作！
          </div>
        </el-col>
      </el-row>
    </el-header>
    <br>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="Hallmark item">
            <notice/>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="Hallmark item">
            <compony-chart/>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="main">
            <div style=" position: absolute; top: -100px; ">
              <el-button style="font-size: 25px; color: #FFFFFF; font-weight: 1000; background: #915ADD">
                企业总数：{{ companyTotal }}
              </el-button>
              <el-button style="font-size: 25px; color: #FFFFFF; font-weight: 1000;  background: #E1AB5E">
                专利申请数：{{ patentTotal }}
              </el-button>
              <el-button style="font-size: 25px; color: #FFFFFF; font-weight: 1000;  background: #11D4E3">
                安全生产天数：{{ safetyProduction }}

              </el-button>
              <el-button style="font-size: 25px; color: #FFFFFF; font-weight: 1000;  background: #2887E8">
                月电量使用总数：{{ electricTotal }}
              </el-button>
              <el-button style="font-size: 25px; color: #FFFFFF; font-weight: 1000;  background: #53D77E">
                本年入孵企业增长率：{{ growthRate }}
              </el-button>
              <el-button style="font-size: 25px; color: #FFFFFF; font-weight: 1000;  background: #D96568">
                本年专利申请增长率：{{ electricGrowthRate }}
              </el-button>
            </div>
            <fire-alarm/>
            <img class="image" height="616" src="../../assets/img/screen.png" width="1891.66"/>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="Hallmark item">
            <hydropower-chart/>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="Hallmark item" style="background: #FFFFFF">
            <img height="570" src="../../assets/img/img.png" width="742"/>
          </div>
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
          <div class="Hallmark right">
            <div class="fiveFather">
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
            </div>
            <br>
            <div class="fiveFather">
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
              <div class="five"><img height="230" src="../../assets/img/img.png" width="253"/></div>
            </div>
          </div>
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
import Notice from "./screenCharts/Notice";
import {BillStatistics, getSafetyDays, QueryCompanyStatistics, QueryPatentStatistics} from "../../network/output";
import EnvironmentalTesting from "./screenCharts/environmentalTesting";
import FireAlarm from "./screenCharts/fireAlarm/fireAlarm";

export default {
  name: "screen",
  components: {
    FireAlarm,
    EnvironmentalTesting,
    Notice,
    PatentStatusChart,
    ParkingChart, AuthenticationChart, SubsidyChart, PatentChart, HydropowerChart, ComponyChart, screenType
  },
  data() {
    return {
      companyTotal: undefined,
      patentTotal: undefined,
      electricTotal: undefined,
      growthRate: undefined,
      electricGrowthRate: undefined,
      safetyProduction: ""
    }
  },
  methods: {

  },
  mounted() {
    //安全生产天数

    getSafetyDays().then(res => {
      // console.log(res)
      this.safetyProduction = res.data;
    })
    //查询公司总数
    QueryCompanyStatistics().then(res => {
      this.companyTotal = res.data.totalCount;
    })
    //查询专利申请数
    QueryPatentStatistics().then(res => {
      this.patentTotal = res.data.totalCount;
      let now = res.data.countGroupByYear[1].count;
      let last = res.data.countGroupByYear[2].count;
      this.electricGrowthRate = Math.floor((now - last) / last * 100) + "%";
    });
    //水电查询
    BillStatistics().then(res => {
      this.electricTotal = res.data.amountGroupByTypeMonth[0].amount;
      // console.log(res);
    })
    //入驻企业增长率
    QueryCompanyStatistics().then(res => {
      let now = res.data.countGroupByYear[1].count;
      let last = res.data.countGroupByYear[2].count;
      this.growthRate = Math.floor((now - last) / last * 100) + "%";
      // console.log(this.growthRate);
    })
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
.fiveFather {
  display: flex;
  height: 240px;
}

.five {
  flex: 1;
  background: #ffffff;
  margin: 5px;
}

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