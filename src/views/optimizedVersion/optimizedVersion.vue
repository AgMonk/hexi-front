<template>
  <el-container>
    <el-header height="150px">
      <el-button style="float: right">当前版本：{{ nowVersion.id }}
        <!--        <p>创建时间：{{nowVersion.timestamp.timeString}}</p>-->
      </el-button>

      <el-form :inline="true">
        <el-form-item label="版本切换">
          <el-select v-model="nowVersion.id" @change="SetVersion">
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
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>水电费数据修改</span>

          <el-button style="position: relative; left: 1250px" type="danger">修改数据</el-button>

        </div>
        <div class="text item">
          <!--          {{billList.amountGroupByTypeMonth}}<br>-->
          <!--          {{billList.topMap}}-->
          <el-form :inline="true" label-width="130px">
            <el-form-item label="月用电总数">
              <el-input v-model="billList.amountGroupByTypeMonth[0].amount" style="width: 100px"></el-input>
            </el-form-item>
            <el-form-item label="月用水总数">
              <el-input v-model="billList.amountGroupByTypeMonth[1].amount" style="width: 100px"></el-input>
            </el-form-item>
            <h3>前十水电费数据修改</h3>
            <el-form-item v-for="item in billList.topMap.水费" :key="item" :label="item.companyName + '-水费' ">
              <el-input v-model="item.amount" style="width: 100px"></el-input>
            </el-form-item>
            <br>
            <el-form-item v-for="item in billList.topMap.电费" :key="item" :label="item.companyName + '-电费' ">
              <el-input v-model="item.amount" style="width: 100px"></el-input>
            </el-form-item>
            <!--            <el-form-item style="float: right">-->
            <!--              <el-button type="danger">修改数据</el-button>-->
            <!--            </el-form-item>-->
          </el-form>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import {createVersion, delVersion, getJson, getVersion, overWrite, setVersion, versionList} from "../../network/output";

export default {
  name: "optimizedVersion",
  data() {
    return {
      param: {
        type: "Bill",
        name: "statistics",
        // type: "",
        // name: "",
        version: 1,
      },
      nowVersion: {},
      versionLists: undefined,
      versionId: "",
      delIds: undefined,
      delId: undefined,
      //账单数据
      billList: {}
    }
  },
  methods: {
    //获取版本
    GetVersion() {
      getVersion().then(res => {
        // console.log(res);
        this.nowVersion = res.data;
      });
    },

    //切换版本
    SetVersion(val) {
      setVersion(val).then(() => {
        // console.log(res)
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
      this.param.type = "Bill"
      getJson(this.param).then(res => {
        // console.log(res)
        this.billList = res.data;
        console.log(this.billList)
        // setJson(this.param,d).then(res => {
        //   console.log(res)
        // })
      })
    },

    //修改数据
    // SetJson() {
    //   this.param.type = "Subsidy"
    //   setJson(this.param).then(res => {
    //     console.log(res)
    //   })
    // },

    //覆盖数据
    OverWrite() {
      overWrite(this.param).then(res => {
        console.log(res)
      })
    },
  },
  mounted() {
    this.GetVersion();
    this.SetVersion();
    this.GetJson();
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