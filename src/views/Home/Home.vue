<template>
  <div>
  </div>
</template>

<script>
import {BarrierLogPage} from "../../network/output";

export default {
  data() {
    return {
      paging: {
        page: 1, size: 10, start: "2010", end: "2022"
      },
    }
  },
  created() {
    this.query();
    // console.log(this.$route.params.num)

  },
  methods: {
    query() {
      BarrierLogPage(this.paging).then(res => {
        console.log(res)
      })
    }
  },
}
</script>

<style scoped>
</style>