<template>
<el-form label-width="100px">
  <el-form-item v-if="false">{{ copySubsidy.uuid }}</el-form-item>
  <el-form-item label="补贴说明">
    <el-input v-model="copySubsidy.name"/>
  </el-form-item>
  <el-form-item label="补贴金额">
    <el-input v-model="copySubsidy.price"/>
  </el-form-item>
  <el-form-item>{{ copySubsidy.companyUuid }}</el-form-item>
  <el-form-item style="text-align: right">
    <el-button @click="update">添加</el-button>
    <el-button>清空</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {UpdateSubsidy} from "../../../network/output";
import {copyObj} from "../../../common/utils";

export default {
  data() {
    return {
      copySubsidy: {
        uuid: undefined,
        name: undefined,
        price: undefined,
        companyUuid: undefined,
      },
      subsdiyData: {},
    }
  },

  methods: {

    // update() {
    //   UpdateSubsidy(this.uuid, this.name, this.price, this.companyUuid,).then(res => {
    //     console.log(res);
    //   })
    // },

    update() {
      UpdateSubsidy(this.copySubsidy.uuid, this.copySubsidy.name, this.copySubsidy.price, this.copySubsidy.companyUuid).then(res => {
        console.log(res);
      })
    },
  },
  mounted() {
    this.subsdiyData = copyObj(this.updateSubsidy);
    // copyObj(this.updateSubsidy);
    this.copySubsidy.uuid = this.subsdiyData.uuid;
    this.copySubsidy.name = this.subsdiyData.name;
    this.copySubsidy.price = this.subsdiyData.price;
    this.copySubsidy.companyUuid = this.subsdiyData.companyUuid;
    // this.update();

  },

  props: {
    updateSubsidy: {
      type: Object,
      required: true,
    }
  },

  watch: {
    updateSubsidy: {
      handler: function (e) {
        this.subsdiyData = copyObj(e);
        this.copySubsidy = this.subsdiyData;
      }
    },
  }
}
</script>

<style scoped>

</style>