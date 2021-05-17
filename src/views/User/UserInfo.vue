<template>
<div>
  <el-card class="box-card">
    <div class="text item" >
      姓名： {{names}}
    </div><hr>
    <div class="text item" >
      电话： {{phones}}
    </div><hr>
    <div class="text item" >
      用户账号：{{usernames}}
    </div><hr>
    <div class="text item" >
      注册时间：{{timeStrings}}
    </div>
  </el-card>
</div>
</template>

<script>
import  {UserInfo} from "../../network/output";

export default {
  name: "UserInfo",
  data() {
    return {
      timeStrings: null,
      names: null,
      phones: null,
      usernames: null,
    }
  },
  created() {
    UserInfo().then(res => {
      this.timeStrings = res.data.createdAt.timeString;
      this.names = res.data.name;
      this.phones = res.data.phone;
      this.usernames = res.data.username;
      if(res.code === 2000) {
        this.$message({
          message: res.message,
          type: 'success'
        })
      }
    })
  }
}
</script>

<style scoped>
.text {
  font-size: 22px;
  font-weight: 1000;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>