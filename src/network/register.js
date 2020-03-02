import {request} from './request'
export function register(form){
  return request({
    url:'/register',
    data:form,
    method: 'post',
  })
}
