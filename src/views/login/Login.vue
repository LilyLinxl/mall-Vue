<template>
  <div class="login">
    <l-r-nav-bar>
      <div slot="title">账号登录</div>
    </l-r-nav-bar>
    <l-r-form  class="account-content">
      <form action="" class="form" slot="form">
        <input type="text" v-model="model.username" placeholder="用户名/邮箱/手机号">
        <input type="password" v-model="model.password" placeholder="密码">
      </form>
      <div class="other-opt" slot="other-opt">
        <a href="/register" >免费注册</a>
        <a href="#" >忘记密码</a>
      </div>
      <div slot="btn" class="btn">
        <button @click="login" id="login">登录</button>
      </div>
    </l-r-form>
  </div>
</template>

<script>
import LRNavBar from './childComps/LRNavBar'
import LRForm from './childComps/LRForm'
import {mapState, mapMutations} from 'vuex'

import {login} from 'network/login'
export default {
  name:'Login',
  data () {
    return {
      model:{
        username:'',
        password:''
      },
      isShow:false
    }
  },
  components:{
    LRNavBar,
    LRForm
  },
  methods:{
    ...mapMutations([
                'record_userinfo',
     ]),
    login(){
      if(Object.values(this.model).length!==2){
        this.$toast.show('请填写完整',2000)
        return
      }
      login(this.model).then(res=>{
        console.log(res)
        this.record_userinfo(res);
        // localStorage.token = res.token//前端保存token
        // localStorage.username = res.username
        if(res.token){
          this.$toast.show('登陆成功',2000)
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
  display: flex;
}
.other-opt a {
  font-size: 14px;
  margin-top: 20px;
}
.other-opt a:last-child {
  flex:1;
}


</style>
