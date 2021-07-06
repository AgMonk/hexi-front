<template>
  <div class="box" v-if="show">
        <div class="column" id="top">
          <hls-test :id="1"  :src="playing[0]"  style="  width: 237.55px; height: 200px;"/>
          <hls-test :id="2" :src="playing[1]" style="  width: 237.55px; height: 200px;"/>
          <hls-test :id="3" :src="playing[2]" style="  width: 237.55px; height: 200px;"/>
        </div>
        <div class="column" id="bottom">
          <hls-test :id="4" :src="playing[3]" style="  width: 237.55px; height: 200px;"/>
          <hls-test :id="5" :src="playing[4]" style="  width: 237.55px; height: 200px;"/>
          <hls-test :id="6" :src="playing[5]" style="  width: 237.55px; height: 200px;"/>
        </div>
  </div>
</template>

<script>
import HlsTest from "../camera/hlsTest";
import {ArtemisCameraPage, getCameraUrl} from "../../network/output";

export default {
  name: "test1",
  components: {HlsTest},
  data() {
    return {
      show: false,
      playing: [],
      cameraList: [],
      indexCodes: [],
      //轮播摄像头切换编号
      cameraIndex: 0

    }
  },
  methods: {
    async updatePlayingUrl(idList) {
      let array = []
      for (let i = 0; i < idList.length; i++) {
        let id = idList[i]
        await getCameraUrl({showMessage: 1, id}).then(res => {
          array.push(res.data)
        })
      }
      return array
    },
    play() {
      // let array = [];
      // let index;
      // // let newPlaying = [];
      // for (let i = 0; i < 6; i++) {
      //   do {
      //     index = Math.floor(Math.random() * this.cameraList.length);
      //   } while (array.includes(this.cameraList[index]))
      //   array.push(this.cameraList[index])
      // }
      // this.updatePlayingUrl(array).then(res => {
      // this.playing = res
      // console.log(this.playing)
      // this.show=true;
      // })

      let index;
      do {
        index = Math.floor(Math.random() * this.cameraList.length);
      } while (this.indexCodes.includes(this.cameraList[index]))
      this.indexCodes[this.cameraIndex] = this.cameraList[index]
      this.cameraIndex++
      this.cameraIndex = this.cameraIndex % 6
      getCameraUrl({id: this.cameraList[index]}).then(res => {
        this.playing[this.cameraIndex] = res.data
      })
    },
    artemisCameraPage() {
      ArtemisCameraPage({showMessage: 1}).then(res => {
        let arr = []
        for (let i = 0; i < res.data.length; i++) {
          arr.push(res.data[i])
        }
        this.cameraList = arr.filter(i => !i.name.includes("梯")).map(i => i.indexCode)
        for (let i = 0; i < 6; i++) {
          this.play();
        }
      }).catch(() => {
        this.artemisCameraPage()
      })
    }

  },
  mounted() {
    setInterval(this.play, 1000 * 30)
    this.artemisCameraPage()
  }
}
</script>

<style scoped>

.box {
  background: #0F373F;
  width: 742.66px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
#top {
  margin-top: 25px;
}
#bottom {
  margin-bottom: 25px;
}
</style>