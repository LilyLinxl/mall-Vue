<template>
 <ul class="catesub">
  <li v-for="item in subcategory">{{item.title}}</li>
 </ul>
</template>

<script>

export default {
  name:'CateSub',
  data () {
    return {
    }
  },
  props:{
    subcategory:{
      type:Array,
      default(){
        return []
      }
    }
  }
}

</script>
<style scoped>
.catesub {
  width: 75%;
  float: right;
}
</style>