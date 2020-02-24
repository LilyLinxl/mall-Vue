<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <cate-menu :category="category" @itemChange="itemChange"/>
     
      <scroll id="cate-content">
        <div>
          <content-cate :subcategory="subcategory"/>
           <tab-control :titles="['综合', '新品', '销量']"
                   @tabClick="tabClick"></tab-control>
           <content-detail></content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getCategory,getSubcategory} from 'network/category'
import TabControl from 'components/content/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import CateMenu from './childComps/CateMenu'
import ContentCate from './childComps/ContentCate'
import ContentDetail from './childComps/ContentDetail'


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
    TabControl,
    Scroll,
    CateMenu,
    ContentCate,
    ContentDetail
  },
  created(){
    this._getCategory()
    //要改
    this._getSubcategory('3627')
  },
  methods:{
    //获取一级分类数据
    _getCategory(){
      getCategory().then(res=>{
      console.log( res)
        this.category = res
      })

    },
    itemChange(maitkey){
      //侧边栏选择改变
      getSubcategory(maitkey).then(res=>{
        this.subcategory = res[0].list
      })
    },
    tabClick(index){

    },
    //获取二级分类数据
    _getSubcategory(maitkey){
      getSubcategory(maitkey).then(res=>{
        this.subcategory = res[0].list
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
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
#cate-content {
  height: 100%;
  flex:1;
}
</style>
