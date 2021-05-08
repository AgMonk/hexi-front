<template>
<div>

</div>
</template>

<script>
import  {UserInfo} from "../../network/output";

export default {
  name: "UserInfo",
  created() {
    UserInfo().then(res => {
      console.log(res);
    })
  }
}
</script>

<style scoped>

</style>