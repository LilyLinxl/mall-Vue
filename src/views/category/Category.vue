<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <cate-menu :category="category" @itemChange="itemChange"/>
    <cate-sub :subcategory="subcategory"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getCategory,getSubcategory} from 'network/category'
import CateMenu from './childComps/CateMenu'
import CateSub from './childComps/CateSub'

export default {
  name: 'Category',
  data() { 
    return {
      category:[],
      subcategory:[],
    }
  },
  components:{
    NavBar,
    CateMenu,
    CateSub
  },
  created(){
    getCategory().then(res=>{
      this.category = res.data.category.list
    })
  },
  methods:{
    itemChange(maitkey){
      //侧边栏选择改变
      getSubcategory(maitkey).then(res=>{
        this.subcategory = res.data.list
    })
    }
  },
  mounted(){
    
  }
 }
</script>

<style scoped>
  .category{
    position: relative;
    height: 100vh
  }
  .navbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  color:#fff;
  background: var(--color-tint);
}
  .content {
  height: 100%;
}
</style>