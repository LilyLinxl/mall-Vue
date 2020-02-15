<!--  -->
<template>
   <nav-bar>
     <div slot="left" class="back" @click="back">
       <img src="~assets/img/common/back.svg" alt="">
     </div>
     <div slot="center" class="detail-nav">
       <a href="#" v-for="(item,index) in titles" 
                  class="title-item" 
                  :class="{active:index===currentIndex}"
                  @click="titleClick(index)"
                  >{{item}}</a>
     </div>
   </nav-bar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'DetailNavBar',
  data () {
  return {
   titles:['商品','参数','评论','推荐'],
   currentIndex:0
  };
 },
 components: {
   NavBar
 },
 methods: {
   back(){
     this.$router.back()
   },
   titleClick(index){
     this.currentIndex = index
     this.$emit('titleClick',index)
   }
 }
}

</script>
<style scoped>
.detail-nav {
  display: flex;
}
.title-item {
  flex:1;
  font-size: 14px;
}
.back {
  padding-left: 20px;
  padding-top: 5px;
}
.active {
  color: var(--color-high-text);
}

</style>