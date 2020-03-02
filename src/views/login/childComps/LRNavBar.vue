<template>
  <nav-bar>
    <div slot="left" class="back" @click="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
      <div slot="center">
        <slot name ="title">默认</slot>
      </div>
  </nav-bar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'LoginNavBar',
  components: {
    NavBar
  },
  methods:{
    back(){
    this.$router.push('/profile')
    }
  }
}
</script>
<style scoped>
  .back {
  padding-left: 20px;
  padding-top: 5px;
}
</style>

        