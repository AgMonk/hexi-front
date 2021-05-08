<template>
  <div id="app">
    <router-view></router-view>
    <left-nav v-if="$route.meta.showleftNav !== true"/>
  </div>
</template>
<script>
import LeftNav from '@/views/Nav/leftNav.vue'
export default {
  components: {
    LeftNav
  }
}
</script>

<style lang="less">

</style>
