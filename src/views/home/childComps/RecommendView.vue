<!--  -->
<template>
 <div class="recommend">
   <div class="recommend-item" v-for="item in recommends">
     <a :href="item.link">
       <img v-lazy="item.image" alt="">
     </a>
     <div>{{item.title}}</div>
   </div>
 </div>
</template>

<script>
export default {
 name:'RecommendView',
 props:{
   recommends:{
     type:Array,
     default(){
       return []
     }
   }
 }
}

</script>
<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
.recommend-item {
  flex:1;
  text-align: center;
  font-size: 12px;
}
</style>