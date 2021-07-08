<template>
  <div>
    <div class="fiveFather">
      <div class="five">
        <video
            id="index0"
            autoplay
            class="video-js vjs-default-skin"
            controls
            height="230px"
            muted
            preload="auto"
            width="237.55px"
        >
          <source src="" type="application/x-mpegURL"/>
        </video>
      </div>
      <div class="five">
        <video
            id="index1"
            autoplay
            class="video-js vjs-default-skin"
            controls
            height="230px"
            muted
            preload="auto"
            width="237.55px"
        >
          <source src="" type="application/x-mpegURL"/>
        </video>
      </div>
      <div class="five">
        <video
            id="index2"
            autoplay
            class="video-js vjs-default-skin"
            controls
            height="230px"
            muted
            preload="auto"
            width="237.55px"
        >
          <source src="" type="application/x-mpegURL"/>
        </video>
      </div>
    </div>
    <br>
    <div class="fiveFather">
      <div class="five">
        <video
            id="index3"
            autoplay
            class="video-js vjs-default-skin"
            controls
            height="230px"
            muted
            preload="auto"
            width="237.55px"
        >
          <source src="" type="application/x-mpegURL"/>
        </video>
      </div>
      <div class="five">
        <video
            id="index4"
            autoplay
            class="video-js vjs-default-skin"
            controls
            height="230px"
            muted
            preload="auto"
            width="237.55px"
        >
          <source src="" type="application/x-mpegURL"/>
        </video>
      </div>
      <div class="five">
        <video
            id="index5"
            autoplay
            class="video-js vjs-default-skin"
            controls
            height="230px"
            muted
            preload="auto"
            width="237.55px"
        >
          <source src="" type="application/x-mpegURL"/>
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import {getCameraUrl} from "../../network/output";
import videojs from "video.js";
import "videojs-contrib-hls";

export default {
  name: "camera",
  data() {
    return {
      indexList: [
        "1f39b69c36ac476a95e7df8b45aa84ee",
        "631f1ae020b74c89b2980e4b068d6b4f",
        "636f41a3f699483e89d4dfc59c9933b2",
        "68c20b3fa4e3410cbd07fd5227474f35",
        "45e0eb16003f43a1a7d881ee0a1e1001",
        "ed131bd09dcc46f492a506bf15a7b268"
      ]
    }
  },
  methods: {
    getVideo(index) {
      videojs(
          index,
          {
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            controlBar: true
          },
          function () {
            this.play();
          }
      );
    },
  },
  mounted() {
    for (let i = 0; i < this.indexList.length; i++) {
      // let index = this.indexList[i];
      this.getVideo("index" + i);
    }
    for (let i = 0; i < this.indexList.length; i++) {
      let index = this.indexList[i];
      getCameraUrl({id: index}).then(res => {
        let myPlayer = videojs("index" + i);
        myPlayer.src([
          {
            type: "application/x-mpegURL",
            src: res.data,
          }
        ]);
        myPlayer.play();
      })
    }


    let player = document.getElementById('index0')

    console.log(player)

//     setInterval(() => {
//       // 获取当前播放时间
//
//       let curr = player.currentTime
//
// // 直播流缓存的最新帧
//
//       let buffer =  player.buffered.end(0)
//
// // 计算延迟
//
//       let delayTime = buffer - curr
//       console.log(delayTime)
//     }, 2000)


  },
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
</style>