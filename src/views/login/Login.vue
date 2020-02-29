<template>
  <div class="login">
    <login-nav-bar/>
    <div class="account-content">
      <form action="" class="login-form">
        <input type="text" v-model="model.username" placeholder="用户名/邮箱/手机号">
        <input type="password" v-model="model.password" placeholder="密码">
      </form>
       <p class="login_tips">
            温馨提示：未注册过的账号，登录时将自动注册
        </p>
        <p class="login_tips">
            注册过的用户可凭账号密码登录
        </p>
      <div class="other-opt">
        <a href="#" >忘记密码</a>
      </div>
      <div class="login-btn">
        <button @click="login" id="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginNavBar from './childComps/LoginNavBar'
import {login} from 'network/login'
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
  },
  methods:{
    login(){
      login(this.model).then(res=>{
        console.log(res)
      })
    }
  }
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
.login_tips{
  color:#f00;
  font-size: 14px;
  margin-top: 10px;
}
.login-btn{
  display: flex;
}
.login-btn button {
  flex:1;
  background-color:var(--color-tint);
  border-radius: 20px;
  color: #fff;
  margin-top: 20px;
}
.other-opt{
  text-align: right;
  display: block;
}
.other-opt a {
  font-size: 14px;
  margin-top: 20px;
  
}

</style>
