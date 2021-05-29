<template>
  <el-form>
    <el-form-item label="">
      <el-button/>
    </el-form-item>
    <el-form-item label="">
      <el-button/>
    </el-form-item>
    <el-form-item label="">
      <el-button/>
    </el-form-item>
    <el-form-item label="">
      <el-button/>
    </el-form-item>
  </el-form>
</template>

<script>
import {AddPatent} from "../../../network/output";

export default {
  name: "PatentFrom",
  data() {
    return {
      patent: {
        name: undefined,
        description: undefined,
        status: undefined,
        type: undefined,
        companyUuid: undefined,
      },
    }
  },
  created() {
    this.addPatent()
  },
  methods: {
    addPatent() {
      AddPatent(this.patent).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>