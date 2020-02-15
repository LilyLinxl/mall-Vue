<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list/>
    <!-- <cart-empty/> -->
    <cart-bottom-bar/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import CartEmpty from './childComps/CartEmpty'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar,
    CartEmpty
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
 }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color:var(--color-tint);
    color:#fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    z-index:9;
  }
</style>