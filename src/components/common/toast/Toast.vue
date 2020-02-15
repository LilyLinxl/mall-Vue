<template>
 <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration = 1500){
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
  
}

</script>
<style scoped>
.toast {
  padding:5px 10px;
  background: rgba(0,0,0,.7);
  color:#fff;
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 999;
}
</style>