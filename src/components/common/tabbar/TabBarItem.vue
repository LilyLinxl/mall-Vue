<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
        path:String
    },
  data() { 
    return {
    }
  },
  methods:{
    ItemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    }
  }
 }
</script>

<style  scoped>
 .tab-bar-item {
  flex:1;
  text-align: center;
  height:49px;
  font-size: 14px;
  /* 一般的app都是49px */
}
 .tab-bar-item img{
   margin-top: 3px;
   margin-bottom: 2px;
   width: 24px;
   height: 24px;
   vertical-align: middle;
 }
 .active {
   color:red;
 }
</style>