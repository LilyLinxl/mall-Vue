<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  data () {
   return {
      scroll:null
    }
  }, 
  props:{
    probeType:Number,
    default:0
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:true,
      click:true
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
   },
   methods:{
     scrollTo(x,y,time=300){
       this.scroll&this.scroll.scrollTo(x,y,time)
     },
     finishPullUp(){
       this.scroll&this.scroll.finishPullUp()
     },
     refresh(){
       this.scroll&this.scroll.refresh()
     },
     getScrollY(){
       return this.scroll?this.scroll.y:0
     }
   }
 }

</script>
<style scoped>

</style>