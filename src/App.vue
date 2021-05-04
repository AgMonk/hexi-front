<template>
  <div id="app">
  </div>
</template>
<script>
import { getUserLogin } from '@/network/output';
export default {
  data() {
    return{
      username: "admin_lzbx",
      password: "123456",
    }
  },
  components: {
  },
  created() {
    getUserLogin(this.username,this.password).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less">

</style>
