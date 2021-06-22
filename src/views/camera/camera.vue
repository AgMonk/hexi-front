<template>
    <div >
      <div class="fiveFather">
        <div class="five">
          <video
              id="index1"
              class="video-js vjs-default-skin"
              controls
              preload="auto"
              muted
              autoplay
              width="237.55px"
              height="230px"
          >
            <source src="" type="application/x-mpegURL" />
          </video>
        </div>
        <div class="five">
          <video
              id="index0"
              class="video-js vjs-default-skin"
              controls
              preload="auto"
              muted
              autoplay
              width="237.55px"
              height="230px"
          >
            <source src="" type="application/x-mpegURL" />
          </video>
        </div>
        <div class="five">
          <video
              id="index2"
              class="video-js vjs-default-skin"
              controls
              preload="auto"
              muted
              autoplay
              width="237.55px"
              height="230px"
          >
            <source src="" type="application/x-mpegURL" />
          </video>
        </div>
      </div>
      <br>
      <div class="fiveFather">
        <div class="five">
          <video
              id="index3"
              class="video-js vjs-default-skin"
              controls
              preload="auto"
              muted
              autoplay
              width="237.55px"
              height="230px"
          >
            <source src="" type="application/x-mpegURL" />
          </video>
        </div>
        <div class="five">
          <video
              id="index4"
              class="video-js vjs-default-skin"
              controls
              preload="auto"
              muted
              autoplay
              width="237.55px"
              height="230px"
          >
            <source src="" type="application/x-mpegURL" />
          </video>
        </div>
        <div class="five">
          <video
              id="index5"
              class="video-js vjs-default-skin"
              controls
              preload="auto"
              muted
              autoplay
              width="237.55px"
              height="230px"
          >
            <source src="" type="application/x-mpegURL" />
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
      indexList:[
        "7d7e627f5f78429795b64a09fb9c4024",
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
          function() {
            this.play();
          }
      );
    },
  },
  mounted() {
    for (let i = 0; i < this.indexList.length; i++) {
      // let index = this.indexList[i];
      this.getVideo("index"+i);
    }


    for (let i = 0; i < this.indexList.length; i++) {
      let index = this.indexList[i];
      getCameraUrl(index).then(res=>{
        let myPlayer = videojs("index"+i);
        myPlayer.src([
          {
            type: "application/x-mpegURL",
            src: res.data,
          }
        ]);
        myPlayer.play();
      })
    }

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