<template>
 <div class="cart-empty">
   <input type="button" @click="goToHome" value="逛一逛">
 </div>
</template>

<script>
export default {
  name:'CartEmpty',
  methods:{
    goToHome(){
      this.$router.push('/home')
    }
  }
}

</script>
<style scoped>
</style>