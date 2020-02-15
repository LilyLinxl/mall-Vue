<template>
 <div class="check-button" :class="{active:isChecked}">
   <img src="~assets/img/cart/tick.svg" alt="">
 </div>
</template>

<script>
export default {
 name:'CheckButton',
 props:{
   isChecked:{
     type:Boolean
   }
 }
 
}

</script>
<style scoped>
.check-button {
  padding: 2px;
  border-radius: 50%;
  border:1px solid #ccc;
}
.active {
  background: red;
}
</style>