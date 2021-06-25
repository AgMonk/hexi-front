<template>
  <el-container>
    <el-header></el-header>
    <el-main>

    </el-main>
  </el-container>
</template>

<script>
import {ArtemisCameraPage} from "../../network/output";

export default {
  name: "cameraIndex",
  data() {
    return {
      data: {
        "code": "0",
        "msg": "SUCCESS",
        "data": {
          "total": 3,
          "pageNo": 1,
          "pageSize": 1,
          "list": [
            {
              "belongIndexCode": "0c0c683b-91fb-4ad2-9fd4-802dc0bb3ffc",
              "indexCode": "636f41a3f699483e89d4dfc59c9933b2",
              "manufacturer": "hik",
              "name": "10栋北面",
              "regionIndexCode": "d8a5476e-25c0-4aa2-b7e3-db3788ba1f77",
            }
          ]
        }
      }
      //   list: [
      //     {"indexCode" : "7d7e627f5f78429795b64a09fb9c4024", "name" :  "13栋北面"},
      //     {indexCode:"631f1ae020b74c89b2980e4b068d6b4f", name: "8栋西面通道"},
      //     {
      //       "636f41a3f699483e89d4dfc59c9933b2 10栋北面"
      //     },
      //     {
      //       "68c20b3fa4e3410cbd07fd5227474f35 1号岗向大厦"
      //     }
      //     {"9ae6a01ba01849c0ac23469bd4946815 4栋北面"}
      //     {"dbea561cef1e4f30800f3b6f08e87829 1栋南面通道"}
      //     {"45e0eb16003f43a1a7d881ee0a1e1001 1栋东面通道"}
      //     {"51fccc874cca4a508daa3caddd5b7191 14栋北面"}
      //     {"8beb59b3e41e49d093a351a5d0c36bd1 9栋西面"}
      // "f76a5fbdd3c54f3d861f1388c14c6cc1 15栋西面通道2"
      //   ]

    }
  },
  methods: {},
  mounted() {
    ArtemisCameraPage({name: "111"}).then(res => {
      console.log(res)
    })

  }
}
</script>

<style scoped>

</style>