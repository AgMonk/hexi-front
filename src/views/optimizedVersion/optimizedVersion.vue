<template>
  <el-container>
    <el-header></el-header>
    <el-main>


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

export default {
  name: "optimizedVersion",
  data() {
    return {
      param: {
        type: "Bill",
        name: "statistics",
        // type: "",
        // name: "",
        version: 3,
      },
    }
  },
  methods: {
    //获取版本
    GetVersion() {
      getVersion().then(res => {
        console.log(res)
      });
    },

    //切换版本
    SetVersion() {
      let id = 3;
      setVersion(id).then(res => {
        console.log(res)
      })
    },

    //获取数据
    GetJson() {
      getJson(this.param).then(res => {
        console.log(res)
      })
    },

    //修改数据
    SetJson() {
      setJson(this.param).then(res => {
        console.log(res)
      })
    },

    //覆盖数据
    OverWrite() {
      overWrite(this.param).then(res => {
        console.log(res)
      })
    },
    //获取版本列表
    VersionList() {
      versionList().then(res => {
        console.log(res)
      })
    },
    //创建新版本
    CeateVersion() {
      let id = 2;
      createVersion(id).then(res => {
        console.log(res)
      })
    },
    //删除版本
    DelVersion() {
      let id = 1;
      delVersion(id).then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    // this.GetVersion();
    this.SetVersion();
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