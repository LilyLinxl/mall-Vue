<template>
  <div class="profile">
    <nav-bar><div slot="center">我的商城</div></nav-bar>
    <user-info></user-info>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'

export default {
  name: 'Profile',
  data() { 
    return {
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#cart', iconColor: '#22cc33', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
  },
  components:{
    NavBar,
    UserInfo,
    ListView
  },
  beforeRouteLeave (to, from, next) {
    if(to.path==="/login"){
      this.$store.commit('set_bottombar_visible',false)
    }
    next()
  }
}
</script>

<style  scoped>
  .nav-bar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    color:#fff;
    background: var(--color-tint);
  }
  .account {
    display: flex;
    border-bottom: 15px solid #eee;
  }
  .account-item{
    flex:1;
    padding: 20px;
    text-align: center;
  }
  .account-item:nth-child(2){
    border-left: 2px solid #eee;
    border-right: 2px solid #eee;
  }
  .number,.account-info {
    font-size: 14px;
  }
  .balance {
    color:orangered;
    font-size: 22px;
    font-weight: 700;
  }
  .account-info {
    margin-top: 10px;
  }

</style>
