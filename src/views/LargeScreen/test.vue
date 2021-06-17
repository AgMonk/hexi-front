<template>
  <div>
    <environmental-testing/>
    <!--    <el-button v-show="show"></el-button>-->
    <!--    <el-button @click="btn"></el-button>-->
    <svg id="myDIV" class="icon" height="128" p-id="1163" t="1623812412632" version="1.1"
         viewBox="0 0 1024 1024" width="128" xmlns="http://www.w3.org/2000/svg" @click="btn">
      <path
          d="M514.707 254.676h-3.723c-143.191 0-259.311 115.874-259.311 258.854v318.044h522.345V513.529c0.001-142.979-116.084-258.853-259.311-258.853z m180.458 492.452H330.527V519.703c0-99.559 81.129-180.564 180.846-180.564h2.947c99.717 0 180.845 81.005 180.845 180.564v227.425zM219.133 500.92c2.875-14.85-6.349-29.348-20.564-32.346l-75.997-15.961c-14.214-2.999-28.06 6.667-30.899 21.534a29.104 29.104 0 0 0-0.229 9.56c1.605 11.093 9.665 20.476 20.793 22.822l76.015 15.978c14.197 2.963 28.042-6.666 30.881-21.587zM197.282 224.922l48.413 63.405c9.047 11.869 25.573 13.774 36.896 4.285 11.305-9.47 13.157-26.772 4.092-38.641l-48.413-63.387c-9.03-11.834-25.574-13.757-36.896-4.303-7.62 6.367-10.936 16.243-9.56 25.661 0.67 4.586 2.469 9.1 5.468 12.98zM512.344 205.469c14.498 0.353 26.508-11.657 26.844-26.825l-0.178-81.146c0.336-15.185-11.129-27.778-25.625-28.131-14.516-0.353-26.543 11.658-26.879 26.826l0.194 81.163a27.293 27.293 0 0 0 0.282 4.815c1.887 12.946 12.416 22.999 25.362 23.298zM733.207 290.55c10.865 10.053 27.48 8.924 37.056-2.47l51.199-60.917c9.577-11.428 8.52-28.8-2.363-38.8-10.883-10.053-27.478-8.942-37.056 2.469l-51.217 60.917c-5.326 6.367-7.372 14.568-6.242 22.328 0.882 6.154 3.791 12.045 8.623 16.473zM936.225 479.42c-2.171-15.009-15.574-25.344-29.895-23.051l-76.633 12.222c-14.355 2.275-24.214 16.297-22.028 31.306 2.189 15.044 15.575 25.361 29.931 23.068l76.613-12.221c14.339-2.311 24.18-16.315 22.012-31.324zM826.542 916.369c0 20.449-16.985 37.029-37.955 37.029H237.123c-20.988 0-37.971-16.58-37.971-37.029 0-20.449 16.983-37.028 37.971-37.028h551.464c20.97 0 37.955 16.579 37.955 37.028z"
          fill="#d81e06" p-id="1164">
      </path>
    </svg>
  </div>

</template>

<script>

import EnvironmentalTesting from "./screenCharts/environmentalTesting";
import {QueryCompanyStatistics} from "../../network/output";

export default {
  name: "test",
  components: {
    EnvironmentalTesting
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    btn() {
      this.show = !this.show;
      console.log(111)
    }
  },
  mounted() {
    QueryCompanyStatistics().then(res => {
      let now = res.data.countGroupByYear[0].count;
      let last = res.data.countGroupByYear[1].count;
      let growthRate = Math.floor((now - last) / last * 100);
      console.log(growthRate);
    })
  }
}
</script>

<style scoped>
#myDIV {
  border-radius: 10px;
  cursor: pointer;
  animation: mymove 5s infinite;
  /*Safari 和 Chrome:*/
  -webkit-animation: mymove 5s infinite;
}

@keyframes mymove {
  from {
    background-color: red;
  }
  to {
    background-color: white;
  }
}

/*Safari 和 Chrome:*/
@-webkit-keyframes mymove {
  from {
    background-color: red;
  }
  to {
    background-color: white;
  }
}



</style>