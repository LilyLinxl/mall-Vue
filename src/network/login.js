import {request} from './request'
export function login({username,password}){
  return request({
    url:'/login',
    parmas:{
      username,
      password
    },
    methods: {
      
    },
  })
}
