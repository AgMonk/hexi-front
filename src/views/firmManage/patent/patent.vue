<template>
  <div>111</div>
</template>

<script>
import {QueryPatentPage} from "../../../network/output";

export default {
  name: "patent",
  data() {
    return {
      paging: {
        page: 1,
        size: 10,
        start: undefined,
        end: undefined,
        condition: {
          companyUuid: undefined
        }
      },
    }
  },
  methods: {
    queryPatent() {
      QueryPatentPage(this.paging).then(res => {
        let d = res.data;
        this.patentData = d.records;
        console.log(this.patentData)
      })
    },
  }
}
</script>

<style scoped>

</style>