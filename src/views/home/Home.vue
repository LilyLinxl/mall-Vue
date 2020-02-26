<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                 @tabClick="tabClick" 
                 ref="tabControl1" 
                 :class="{fixed:isTabFixed}"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper class="my-swiper" :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" 
                  @tabClick="tabClick" 
                  ref="tabControl2"/>
      <goods-list :goods="goodsList"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultiData,getHomeGoods } from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import {debounce} from 'common/utils'
import {backTopMixin} from 'common/mixin'

export default {
  name: 'Home',
  data() { 
    return {
      banners:null,
      recommends:null,
      goods:{
        'pop': {page:0,list:[]},
        'new': {page:0,list:[]},
        'sell': {page:0,list:[]}
      },
      currentTab:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  mixins:[backTopMixin],
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  created(){
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    //1.图片加载完成的数据监听
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('homeItemImgLoad',()=>{
      refresh()
    })  
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    this.saveY  = this.$refs.scroll.getScrollY()
  },
  methods:{
    /**一般方法 */
    tabClick(index){
      switch(index){
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2:
          this.currentTab = 'sell'
          break  
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // backTop(){
    //   this.$refs.scroll.scrollTo(0,0,500)
    // },
    contentScroll(position){
      //1.判断BackTop是否显示
      this.listenShowBackTop(position)
      //2.决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    swiperImageLoad(){
      //获取tabControl的offsetTop
      //所有的组件都有一个属性$el:用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentTab)
    },
    /**网络请求 */
    getHomeMultiData(){
      getHomeMultiData().then(res => {
        this.banners = res[0].banner
        this.recommends = res[0].recommend
      }).catch(err=>{
        console.log(err)
      })
      //  getHomeBanner().then(res => {
      //  this.banners = res
      //  console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
      // getActivity().then(res => {
      //  this.recommends = res
      //  console.log(res)

      // }).catch(err=>{
      //   console.log(err)
      // })
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
        // for (let index = 0; index < res.data.list.length; index++) {
        //    res.data.list[index]['topType']=type;
        // }
        // console.log(JSON.stringify(res.data.list))

      })
        
    }
  },
  computed:{
    goodsList(){
      return this.goods[this.currentTab].list
    }
  }
 }
</script>

<style scoped>
   #home {
     position: relative;
     height: 100vh;
   }
  .home-nav {
    position: fixed;
    background-color:var(--color-tint);
    color:#fff;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left:0;
    right:0;
    overflow: hidden;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 10;
  }
</style>
