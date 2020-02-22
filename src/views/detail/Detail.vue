<template>
 <div class="detail">
   <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"/>
   <scroll class="content" ref="scroll" @scroll="currentScroll">
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detailInfo="detailInfo" @detailImgLoad="detailImgLoad"/>
    <detail-param-info ref="param" :paramInfo="paramInfo"/>
    <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
    <goods-list ref="recommend" :goods="recommends"/>
   </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
 </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import {getDetailData,Goods,Shop,GoodsParams,getRecommends} from 'network/detail'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils'
import {mapActions} from 'vuex'

export default {
  name:'Detail',
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      message:'',
      toastShow:false
    };
  },
  mixins:[itemListenerMixin,backTopMixin],
  components:{
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  created(){
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res=>{
      console.log(res)
      //1.获取顶部的图片轮播数据
      this.topImages = res.topImages
      //2.获取商品信息
      this.goods = res.goods
      //3.获取店铺信息
      this.shop =  res.shop
      //4.获取商品详情数据
      this.detailInfo = res.detail
      //5.获取商品参数数据
      this.paramInfo = res.param
      //6.获取评论数据
      if(res.comment){
        this.commentInfo = res.comment
      }
    })
    //7.获取推荐数据
    getRecommends().then(res=>{
      // this.recommends = res.data.list
      this.recommends = res

    })
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    },100)
  },
  mounted(){
    this.$bus.$on('detailItemImgLoad',()=>{
      this.newRefresh()
    })  
  },
  methods:{
    ...mapActions(['addCart']),
    detailImgLoad(){
      this.newRefresh()
      this.getThemeTopY()
    },
    titleClick(index){
      this.currentIndex = index
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    currentScroll(position){
      //1.获取y值
      const positionY = -position.y
      //2.positionY和主题中值进行对比
      let length = this.themeTopYs.length
      this.themeTopYs.push(Number.MAX_VALUE)
      for(let i = 0;i < length;i++ ){
        if(this.currentIndex!==i && (positionY>=this.themeTopYs[i]&& positionY<this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      //3.返回顶部
      this.listenShowBackTop(position)
    },
    addToCart(){
      //1.获取购物车需要展示的信息
      console.log(this.goods)
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice
      product.iid = this.iid
      //2.将商品添加到购物车里
      // this.$store.dispatch('addCart',product)
      this.addCart(product).then(res=>
      { 
        this.$toast.show(res,2000)
      }
      )
    }
  }
}
</script>
<style scoped>
.detail {
  position: relative;
  height: 100vh;
  background: #fff;
  z-index: 9;
}

.detail-nav-bar{
  position: relative;
  z-index: 9;
  background: #fff;
}
.content {
  height:calc(100% - 44px - 49px);
  background: #fff;
}

</style>
