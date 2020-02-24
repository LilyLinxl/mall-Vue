<template>
  <grid-view :cols="3" :lineSpace="15" :v-margin="20" 
  v-if="subcategory">
    <div class="item" v-for="(item,index) in subcategory" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </grid-view>
</template>

<script>
import GridView from 'components/common/gridView/GridView'
export default {
  name:'ContentCate',
  components:{
    GridView
  },
  props:{
    subcategory:{
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
  .item {
    text-align: center;
    font-size: 12px;
  }
  .item-img {
    width: 80%;
  }
  .item-text {
    margin-top: 15px;
  }
</style>
