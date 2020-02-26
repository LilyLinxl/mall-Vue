<template>
 <div>
   <div class="goods">
     <goods-list-item v-for="(item,index) in goods" :good-item="item" :key="index"/>
   </div>
 </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
</style>
