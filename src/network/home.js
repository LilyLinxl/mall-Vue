import {request} from './request'

export function getHomeMultiData(){
  return request({
    url:'/homeInfo'
  })
}
// export function getHomeBanner(){
//   return request({
//     url:'/home/banner'
//   })
// }
// export function getActivity(){
//   return request({
//     url:'/home/activity'
//   })
// }

export function getHomeGoods(type,page){
  return request({
    url: `/home/good/${type}/${page}`,
    
  })
}
