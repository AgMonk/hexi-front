<template>
<div>
  <h2>查询juese列表</h2>
 <user-list />
</div>
</template>

<script>
import UserList from "./UserList";
export default {
  name: "PUser",
  // provide() {
  //   return {
  //     reload: this.reload,
  //   }
  // },
  data() {
    return {
      // isRefresh: true,
    }
  },
  methods: {
    // reload() {
    //   this.isRefresh = false;
    //   this.$nextTick(function (){
    //     this.isRefresh =true;
    //   })
    // }
  },
  components: {
    UserList,
  }
}
</script>

<style scoped>

</style>