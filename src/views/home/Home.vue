<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper class="swiper" :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultiData } from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


export default {
  name: 'Home',
  data() { 
    return {
      banners:null,
      recommends:null
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created(){
    getHomeMultiData().then(res => {
       this.banners = res.data.banner.list
       this.recommends = res.data.recommend.list
    }).catch(err=>{
      console.log(err)
    })
  }
 }
</script>

<style scoped>
  .home-nav {
    position: fixed;
    background-color:var(--color-tint);
    color:#fff;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
  }
  .swiper {
    padding-top: 44px;
  }
</style>