<template>
  <el-container>
    <el-header>
      <h2 style="text-align: center">{{ companyData.name }}</h2>
    </el-header>
    <el-main>
      <hr>
      <span>企业名称： <el-input v-model="companyData.name" class="company"></el-input></span>
      <span>企业地址： <el-input v-model="companyData.address" class="company"></el-input></span>
      <span>所在楼栋： <el-input v-model="companyData.buildingIndex" class="company"></el-input></span>
      <span>认证类型： <el-input v-model="companyData.certificationType" class="company"></el-input></span>
      <span>企业类型： <el-input v-model="companyData.type" class="company"></el-input></span>
      <span>电话号码： <el-input v-model="companyData.phone" class="company"></el-input></span>
      <span>拥有专利： <el-input v-model="companyData.countPatent" :readonly="true" class="company"></el-input></span>
      <span>补贴数量： <el-input v-model="companyData.countSubsidy" :readonly="true" class="company"></el-input></span>
      <!--    <span> <el-input class="company" v-model="">{{companyData.sumBill}}</el-input></span>-->
      <!--    <span> <el-input class="company" v-model="">{{companyData.sumPayment}}</el-input></span>-->
      <!--    <span>录入时间： <el-input class="company" v-model="companyData.timestamp.timeString"-->
      <!--                          :readonly="true" v-if="companyData.timestamp"></el-input></span>-->
      <br>
      <p style="text-align: right">
        <el-button type="primary" @click="modifyCompanyInformation">修改企业</el-button>
        <el-button type="danger" @click="deleteCompany">删除企业</el-button>
      </p>
      <hr>
    </el-main>
  </el-container>
</template>

<script>
import {QueryCompanyPage, updateCompony} from "../../../../../network/output";

export default {
  name: "companyInformation",
  data() {
    return {
      //公司数据
      companyData: []
    }
  },

  mounted() {
    this.inquiryCompany()
  },
  methods: {
    //查询公司
    inquiryCompany() {
      let page = {condition: {uuid: this.uuid}}
      QueryCompanyPage(page).then(res => {
        console.log(res)
        this.companyData = res.data.records[0]
      })
    },
    //修改公司
    modifyCompanyInformation() {

      this.$confirm('确定修改公司数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateCompony(this.companyData).then(res => {
          if (res.code === 2000) {
            this.inquiryCompany()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })


    },
    //删除公司
    deleteCompany() {
      this.$confirm('此操作将永久删除该公司所有数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateCompony(this.companyData).then(res => {
          if (res.code === 2000) {
            this.$router.push({
              path: '/newCompony',
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })

    }

  },
  props: ['uuid']
}
</script>

<style scoped>
.company {
  width: 200px;
  margin-top: 1%;
  margin-right: 6.3%;
}
</style>