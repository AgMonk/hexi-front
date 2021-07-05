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
        console.log(this.cameraNameList)
        // for (let i = 0; i < this.cameraNameList.length; i++) {
        //    console.log(this.cameraNameList[i])
        //  }
        // console.log(this.groupByRegionName(data))
        for (let i = 0; i < data.length; i++) {
          this.indexCode.push({
            name: data[i].name,
            id: data[i].indexCode,
          })
        }
        console.log(this.indexCode)
      })
    },
    //摄像头分组
    groupByRegionName: (array) => {
      let data = {}
      for (let i = 0; i < array.length; i++) {
        let item = array[i]
        let name = item.regionName
        data[name] = data[name] ? data[name] : [];
        data[name].push(item)
      }
      let arr = []
      Object.keys(data).forEach(regionName => {
        arr.push({regionName, cameras: data[regionName]})
      })
      console.log(arr)
      arr.sort((a, b) => {
        let aName = a.regionName;
        let bName = b.regionName;
        let aIndex = aName.includes("栋") ? -2 : (aName.includes("岗") ? -1 : 0)
        let bIndex = bName.includes("栋") ? -2 : (bName.includes("岗") ? -1 : 0)
        if (aIndex !== bIndex) {
          return aIndex - bIndex
        }
        // let regexp = /\d+/g;
        // let aNumber = regexp.exec(aName) ? regexp.exec(aName)[0] : 100;
        // let bNumber = regexp.exec(bName) ? regexp.exec(bName)[0] : 100;
        // if (aNumber !== bNumber) {
        //   return aNumber - bNumber
        // }
        return aName.localeCompare(bName)
      })
      return arr
    }


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