<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix" style="font-size: 17px; font-weight: 600">
      <span>{{ index.regionName }}摄像头列表</span>
    </div>
    <div v-for="(cameraList, i) in index.cameras" :key="i" class="text item">
      <el-button type="text" @click="sendOutIndexCode(cameraList.indexCode)">{{ cameraList.name }}</el-button>
    </div>
  </el-card>

</template>

<script>
import {Unicom} from "../common/utils";

export default {
  name: "BuildingCameraIndex",
  data() {
    return {
      index: []
    }
  },
  methods: {
    sendOutIndexCode(code) {
      Unicom.$emit('videoIndex', code)
    }
  },
  watch: {
    "buildingIndex": {
      handler(e) {
        this.index = e
      }
    }
  },
  props: ["buildingIndex"]
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>