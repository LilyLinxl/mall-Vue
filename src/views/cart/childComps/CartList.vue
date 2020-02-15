<template>
 <div class="cart-list">
   <scroll class="content" ref="scroll">
     <ul>
       <li v-for="item in cartList" >
        <cart-list-item :item-info="item"></cart-list-item>
       </li>
     </ul>
   </scroll>
 </div>
</template>

<script>
import CartListItem from './CartListItem'
import Scroll from 'components/common/scroll/Scroll'
import { mapGetters } from 'vuex'

export default {
  name:'CartList',
  components:{
    CartListItem,
    Scroll
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}

</script>
<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px);
  padding-top: 44px;
}
.content {
  height: 100%;
}
.content ul {
  padding-bottom: 89px;
}
</style>