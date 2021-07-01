<template>
<el-container>
  <el-aside width="500px">

    <el-card class="box-card">
      <div class="text item" v-for="(i, o) in indexCode" :key="o">
        <span style="cursor: pointer;" @click="play(i.id)">{{i.name}}</span>
      </div>
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

export default {
  name: "camera",
  components: {hlsTest},
  data() {
    return {
      playing: "http://192.168.0.220:83/openUrl/AaE2iVW/live.m3u8",
      indexCode: [],
    }
  },
  methods: {
    play(id) {
      getCameraUrl({id,streamType: 0}).then(res => {
        console.log(res)
        this.playing = res.data;
      })
    },
    cameraPage() {
      ArtemisCameraPage({showMessage: 1}).then(res => {
        console.log(res)
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          this.indexCode.push({
            name: data[i].name,
            id: data[i].indexCode,
          })
        }
        console.log(this.indexCode)
      })
    },

  },
  mounted() {
    this.cameraPage();
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