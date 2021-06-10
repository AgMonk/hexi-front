<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <!--    <el-button @click="soilDatapage"></el-button>-->
    </el-main>
  </el-container>
</template>

<script>
import {SoilDatapage} from "../../../network/output";

export default {
  name: "SoilData",
  data() {
    return {
      soilData: {
        page: 1,
        size: 100,
        start: undefined,
        end: undefined
      },
    }
  },
  methods: {
    soilDatapage() {
      SoilDatapage(this.soilData).then(res => {
        console.log(res);
      })
    }
  },
}
</script>

<style scoped>

</style>