<template>
  <div class="login">
    <l-r-nav-bar>
      <div slot="title">账号注册</div>
    </l-r-nav-bar>
    <l-r-form  class="account-content">
      <form action="" class="form" slot="form">
        <input type="text" v-model="model.username" placeholder="用户名/邮箱/手机号">
        <input type="password" v-model="model.password" placeholder="密码">
        <input type="password" v-model="model.repassword" placeholder="确认密码">
      </form>
      <div class="other-opt" slot="other-opt">
        已有账号了?<a href="/login" >登录</a>
      </div>
      <div slot="btn" class="btn">
        <button @click="register" id="register">注册</button>
      </div>
    </l-r-form>
  </div>
</template>

<script>
import LRNavBar from './childComps/LRNavBar'
import LRForm from './childComps/LRForm'
import {register} from 'network/register'
export default {
  name:'Login',
  data () {
    return {
      model:{
        username:'',
        password:'',
        repassword:''
      },
      isShow:false
    }
  },
  components:{
    LRNavBar,
    LRForm
  },
  methods:{
    register(){
      if(Object.values(this.model).length!==3){
        this.$toast.show('请填写完整',2000)
        return
      }
      if(this.model.password!==this.model.repassword){
        this.$toast.show('两次密码输入不同',2000)
        return
      }
      register(this.model).then(res=>{
        this.$toast.show(res.msg,2000)
        if(res.code===200){
          this.$router.push('/profile')
        }
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
.form {
  text-align: center;
}
.form input {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
.btn{
  display: flex;
}
.btn button {
  flex:1;
  background-color:var(--color-tint);
  border-radius: 20px;
  color: #fff;
  margin-top: 20px;
}
.other-opt{
  text-align: right;
  display: block;
  font-size: 14px;
  margin-top: 15px;
}
.other-opt a {
  font-size: 14px;
  margin-top: 20px;
  
}


</style>
