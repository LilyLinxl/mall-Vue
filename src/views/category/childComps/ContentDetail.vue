<template>
  <grid-view class="grid-view">
    <goods-list-item v-for="(item, index) in categoryDetial"
    :key="index" :goodItem="item"></goods-list-item>
  </grid-view>
</template>
<script>
import GridView from 'components/common/gridView/GridView'
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  name:'ContentDetail',
  components: {
    GridView,
    GoodsListItem
  },
  props:{
    categoryDetial:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}

</style>
