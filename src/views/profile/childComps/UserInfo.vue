<template>
  <div id="user-info">
    <a href="javscript:;" class="clear-fix" @click="toLogin">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>{{username}}</div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be=""  xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be=""  xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

	export default {
    name: "UserInfo",
    data(){
      return {
        username:'登录/注册'
      }
    },
    methods:{
      toLogin(){
        this.$router.push('/login')
      },
      initData(){
        console.log(this.userInfo)
        if(this.userInfo){
          this.username = this.userInfo
        }else{
          this.username = '登录/注册'
        }
      }
    },
    computed:{
      ...mapState([
            'userInfo',
      ]),
    },
    mounted(){
      this.initData()
    },
    watch: {
        userInfo: function (value){
          this.initData()
        }
    }
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: 44px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
</style>
