<template>
     <ul class="leftbar">
       <li v-for="(item,index) in category" class="leftbar-item " 
       :class="{active:index===currentIndex}"
       @click="itemChange(index,item)">{{item.title}}</li>
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
      this.$emit('itemChange',item.maitKey)
      }
    }
}

</script>
<style scoped>

.leftbar {
  position: absolute;
  top: 44px;
  width: 25%;
  background: #eee;
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