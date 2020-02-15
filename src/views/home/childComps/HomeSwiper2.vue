<!--  -->
<template>
 <div class="my-swipe" >
   <van-swipe :autoplay="3000" indicator-color="white" :show-indicators="true">
    <van-swipe-item v-for="(item, index) in banners" :key="index" >
      <a :href="item.link"> <img v-lazy="item.image" @load="imageLoad"/></a>
    </van-swipe-item>
  </van-swipe>
 </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name:'HomeSwiper2',
    data () {
    return {
      isLoad:false
    };
  },
  components:{
    Swipe,
    SwipeItem
  },
  props:{
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}

</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  float: left;
}
.van-swipe-item img {
  width:100%;
  height: 100%;
}
.my-swipe {
  overflow: hidden;
}
.van-swipe .van-swipe__indicators{
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 bottom: 5px;
 padding: 2px 5px;
 font-size: 12px;
 color: #fff;
 background: red;
}

</style>