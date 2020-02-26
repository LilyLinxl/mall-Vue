<template>
     <ul class="leftbar">
       <li v-for="(item,index) in category" class="leftbar-item" 
       :class="{active:index===currentIndex}"
       @click="itemChange(index,item)" :key="index">{{item.title}}</li>
     </ul>
</template>

<script>
export default {
  name:'CateMenus',
  props:{
    category:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods:{
    itemChange(index,item){
      this.currentIndex = index
      this.$emit('itemChange',{maitKey:item.maitKey,index:index})
      }
    }
}

</script>
<style scoped>

.leftbar {
  /* position: absolute;
  width: 25%; */
  background: #eee;
  height: 100%;
  width: 100px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.leftbar-item {
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.active {
  border-left: 2px solid var(--color-tint);
  box-sizing: border-box;
  background:#fff;
  color:var(--color-tint);
  font-weight: 700;
}
</style>
