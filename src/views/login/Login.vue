<template>
  <div class="login">
    <login-nav-bar/>
    <div class="account-content">
      <form action="" class="login-form">
        <input type="text" v-mode="model.username" placeholder="用户名/邮箱/手机号">
        <input type="password" v-mode="model.password" placeholder="密码">
      </form>
      <div class="other-opt">
        <a href="#" class="left">免费注册</a>
        <a href="#" class="right">忘记密码</a>
      </div>
      <div class="login-btn">
        <button @click="login" id="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginNavBar from './childComps/LoginNavBar'
export default {
  name:'Login',
  data () {
    return {
      model:{},
      isShow:false
    }
  },
  components:{
    LoginNavBar
  }
  // ,
  // beforeRouteLeave (to, from, next){
  //   this.$store.commit('set_bottombar_visible',true)
  //   next()
  // }
}
</script>

<style scoped>
input,button {
  height:45px;
  line-height: 45px;
  outline: none;
  font-size: 16px;
  border:none;
}
.account-content {
  padding: 50px 20px;
}
.login-form {
  text-align: center;
}
.login-form input {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
.login-btn,.other-opt{
  display: flex;
}
.login-btn button {
  flex:1;
  background-color:var(--color-tint);
  border-radius: 20px;
  color: #fff;
  margin-top: 20px;
}
.other-opt a {
  font-size: 14px;
  margin-top: 20px;
}
.other-opt a:first-child{
  flex: 1;
}
</style>
