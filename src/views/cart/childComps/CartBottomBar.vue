<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @click.native="clickAll" :is-checked="isSelectedAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="calculate">去计算({{checkedLength}})</span>
  </div>
</template>

<script>
 import CheckButton from 'components/common/checkButton/CheckButton'
 import { mapGetters } from 'vuex'

	export default {
		name: "CartBottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
		  totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      checkedLength(){
         return this.cartList.filter(item => {
          return item.checked
        }).length
      },
      isSelectedAll(){
        if(this.cartList.length===0) return false
        else {
          return !this.cartList.find(item => !item.checked)
        } 
      }
    },
    methods:{
      clickAll(){
        if(this.isSelectedAll){
          this.cartList.forEach(item => {
            item.checked = false
          })
        }else{
          this.cartList.forEach(item => {
            item.checked = true
          })
        }
      },
      calculate(){
        if(!this.isSelectedAll){
          this.$toast.show('请选择商品')
        }
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
