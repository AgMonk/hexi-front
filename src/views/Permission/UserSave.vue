<template>
<div class="right">
  <div class="topnav">
    <a href="#">用户</a>
    <a href="#">角色</a>
    <a href="#">权限</a>
  </div>
</div>
</template>

<script>
import {AddUserSave} from "../../network/output";

export default {
  name: "AddUserSave",

  data() {
    return  {
     param:{
       remark: "",
       namespace: "",
       action: "",
       target: "",
       id:undefined,
     }
    }
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }

  },
  created() {
    AddUserSave(this.param).then(res => {
      console.log(res)
    })
  },
}
</script>

<style scoped>

.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
  width: 100px;
}

.topnav a:hover {
  background-color: #ECF5FF;
  color: black;
}

.topnav a:focus {
  background-color: #ECF5FF;
  color: #409EFF;
}





</style>