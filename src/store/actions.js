export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2.判断oldProduct
      if(oldProduct){
        context.commit('add_counter',oldProduct)
        resolve('商品数量+1')
      }else {
        payload.count = 1
        context.commit('add_to_cart',payload)
        resolve('已添加至购物车')
      }
    })
  }
}