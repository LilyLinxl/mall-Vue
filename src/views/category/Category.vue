<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <cate-menu :category="category" @itemChange="itemChange"/>
      <scroll id="cate-content" @scroll="contentScroll" ref="scroll">
        <div>
          <content-cate :subcategory="subcategory"/>
            <tab-control :titles="['综合', '新品', '销量']"
                  @tabClick="tabClick"></tab-control>
            <content-detail :categoryDetial="goods"></content-detail>
        </div>
      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
import TabControl from 'components/content/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import CateMenu from './childComps/CateMenu'
import ContentCate from './childComps/ContentCate'
import ContentDetail from './childComps/ContentDetail'
import {backTopMixin} from 'common/mixin'

export default {
  name: 'Category',
  data() { 
    return {
      category:[],
      subcategory:[],
      goods:[],
      titles:['pop','new','sell'],
      maitkey:'',
      miniWallkey:'',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      index:0
    }
  },
  mixins:[backTopMixin],
  components:{
    NavBar,
    TabControl,
    Scroll,
    CateMenu,
    ContentCate,
    ContentDetail
  },
  created(){
    this.initInfo()
  },
  updated(){
    this._getCategoryDetail(this.miniWallkey,this.titles[this.index]||'pop')
  },
  methods:{
    //获取一级分类数据
    _getCategory(){
        return getCategory().then(res=>{
        this.category = res
        this.maitkey = res[0].maitKey
        this.miniWallkey = res[0].miniWallkey
      })
    },
    itemChange(params){
      //侧边栏选择改变
      getSubcategory(params.maitKey).then(res=>{
        this.subcategory = res[0].list
        this.miniWallkey = this.category[params.index].miniWallkey
      })
    },
    tabClick(index){
      console.log(this.miniWallkey)
      this.index = index
      this._getCategoryDetail(this.miniWallkey,this.titles[index])
    },
    //获取二级分类数据
    _getSubcategory(maitkey){
        getSubcategory(maitkey).then(res=>{
        this.subcategory = res[0].list
      })
    },
    _getCategoryDetail(miniWallkey,type){
        getCategoryDetail(miniWallkey,type).then(res=>{
        this.goods = res
      })
    },
    async initInfo(){//打开页面时初始化数据
      await this._getCategory()
      this._getSubcategory(this.maitkey)
      this._getCategoryDetail(this.miniWallkey,this.titles[0])
    },
    contentScroll(position){
      //1.判断BackTop是否显示
      this.listenShowBackTop(position)
      //2.决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    }
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
