<template>
<div>
  <top-nav />
  <left-nav />
</div>
</template>

<script>
import leftNav from "./leftNav";
import topNav from "./topNav";
export default {
  name: "index.vue",

  components: {
    leftNav, topNav
  }
}
</script>

<style scoped>

</style>