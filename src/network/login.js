import {request} from './request'
export function login(form){
  return request({
    url:'/login',
    data:form,
    method: 'post',
  })
}
