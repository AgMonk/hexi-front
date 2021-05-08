<template>
  <div id="app">
    <top-nav />
    <router-view></router-view>
    <left-nav v-if="$route.meta.showleftNav !== true"/>
  </div>
</template>
<script>
import LeftNav from '@/views/Nav/leftNav.vue';
import topNav from "./views/Nav/topNav";
export default {
  components: {
    LeftNav, topNav,
  }
}
</script>

<style lang="less">

</style>
