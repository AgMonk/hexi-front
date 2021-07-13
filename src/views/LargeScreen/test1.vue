<template>
  <div class="box" v-if="show">
    <div class="column" id="top">
      <hls-test @change-url="changeUrl" :id="1" :src="playing[0]" style="  width: 237.55px; height: 200px;"/>
      <hls-test @change-url="changeUrl" :id="2" :src="playing[1]" style="  width: 237.55px; height: 200px;"/>
      <hls-test @change-url="changeUrl" :id="3" :src="playing[2]" style="  width: 237.55px; height: 200px;"/>
    </div>
    <div class="column" id="bottom">
      <hls-test @change-url="changeUrl" :id="4" :src="playing[3]" style="  width: 237.55px; height: 200px;"/>
      <hls-test @change-url="changeUrl" :id="5" :src="playing[4]" style="  width: 237.55px; height: 200px;"/>
      <hls-test @change-url="changeUrl" :id="6" :src="playing[5]" style="  width: 237.55px; height: 200px;"/>
    </div>
  </div>
</template>

<script>
import HlsTest from "../camera/hlsTest";
import {ArtemisCameraPage, getCameraUrl} from "../../network/output";
import {copyObj} from "../../common/utils";

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
    /**
     * 更新当前播放的摄像头id数组，更换一个指定下标为新的摄像头id，并保证不重复
     * @param i 数组下标
     * @returns {*} 新摄像头id
     */
    updateRandomIndexCode(i) {
      let index;
      let item;
      do {
        index = Math.floor(Math.random() * this.cameraList.length)
        item = this.cameraList[index];
      } while (this.indexCodes.includes(item))
      this.indexCodes[i] = item;
      return item;
    },
    //更新需要更换地址的摄像头下标
    updateCameraIndex() {
      this.cameraIndex++
      this.cameraIndex = this.cameraIndex % 6
    },
    //获取摄像头播放地址，并替换到播放地址数组的指定下标
    getCameraUrl: (id, index) => getCameraUrl({id}).then(res => {
      this.playing[index] = res.data;
      this.playing = copyObj(this.playing)
      if (this.playing.length === 6) {
        this.show = true
      }
    }),
    play() {
      let id = this.updateRandomIndexCode(this.cameraIndex);
      this.getCameraUrl(id, this.cameraIndex).then(() => {
        this.updateCameraIndex()
      })
    },
    changeUrl(id) {
      console.log(id + "连续错误切换")
      let index;
      do {
        index = Math.floor(Math.random() * this.cameraList.length);
      } while (this.indexCodes.includes(this.cameraList[index]))
      this.indexCodes[id] = this.cameraList[index]
      getCameraUrl({id: this.cameraList[index]}).then(res => {
        this.playing[id] = res.data
        this.playing = copyObj(this.playing)
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
    },
    //设置定时器，销毁定时器
    interval() {
      const timer = setInterval(this.play, 1000 * 30)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer);
      })
    }

  },
  mounted() {
    this.interval()
    this.artemisCameraPage()
  },

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