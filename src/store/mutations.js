import {ADD_COUNTER,ADD_TO_CART} from './mutations_type'

export default {
  [ADD_COUNTER](state,payload){
    payload.count += 1
  },
  [ADD_TO_CART](state,payload){
    payload.checked = false
    state.cartList.push(payload)
  }
  // ,
  // [SET_BOTTOMBAR_VISIBLE](state,payload){
  //   state.showBottomNav = payload
  // }
}
