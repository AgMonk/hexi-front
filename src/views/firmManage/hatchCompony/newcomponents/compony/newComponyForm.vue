<template>
  <div>
    <el-button @click="test"/>
  </div>
</template>

<script>
export default {
  name: "newComponyForm",
  data() {
    return {}
  },
  methods: {
    test() {
      console.log(this.selection)
    }
  },
  props: ['selection']

}
</script>

<style scoped>

</style>