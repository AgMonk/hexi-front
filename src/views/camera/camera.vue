<template>
<el-container>
  <el-aside width="500px">

    <el-card class="box-card">
      <h3></h3>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item v-for="(group, i) in cameraNameList" :key="i" :name="group.regionName"
                          :title="group.regionName">
          <el-button v-for="(camera, i) in group.cameras" :key="i" style="text-align: left" type="text"
                     @click="play(camera.indexCode)">
            {{ camera.name }}
          </el-button>

        </el-collapse-item>
      </el-collapse>

    </el-card>

  </el-aside>
  <el-main style="padding: 0">
    <hls-test :id="6" :src="playing" style="width: 800px"/>
  </el-main>
</el-container>
</template>

<script>
import {ArtemisCameraPage, getCameraUrl} from "../../network/output";
import hlsTest from "./hlsTest";
import {groupByRegionName} from "../../common/cameraUtils";

export default {
  name: "camera",
  components: {hlsTest},
  data() {
    return {
      activeName: '1',
      playing: "http://192.168.0.220:83/openUrl/AaE2iVW/live.m3u8",
      indexCode: [],
      cameraNameList: [],
    }
  },
  methods: {
    play(id) {
      getCameraUrl({id, streamType: 0}).then(res => {
        this.playing = res.data;
        console.log(this.playing)
      })
    },
    cameraPage() {
      ArtemisCameraPage({showMessage: 1}).then(res => {
        let data = res.data;
        this.cameraNameList = this.groupByRegionName(data);
        for (let i = 0; i < data.length; i++) {
          this.indexCode.push({
            name: data[i].name,
            id: data[i].indexCode,
          })
        }
        console.log(this.indexCode)
      })
    },
    groupByRegionName
  },
  mounted() {
    this.cameraPage();
    const ratio = window.devicePixelRatio;
    console.log(ratio)
  },
}
</script>

<style scoped>

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

</style>