import {ADD_COUNTER,ADD_TO_CART,RECORD_USERINFO} from './mutations_type'
import {setStore, getStore} from '../common/utils'

export default {
  [ADD_COUNTER](state,payload){
    payload.count += 1
  },
  [ADD_TO_CART](state,payload){
    payload.checked = false
    state.cartList.push(payload)
  },
  [RECORD_USERINFO](state, info) {
		state.userInfo = info.username
		state.login = info.token?true:false
		setStore('user_id', info.id)
	}
}
