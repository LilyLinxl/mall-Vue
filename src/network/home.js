import {request} from './request'

// export function getHomeMultiData(){
//   return request({
//     url:'/home/multidata'
//   })
// }
export function getHomeBanner(){
  return request({
    url:'/home/banner'
  })
}
export function getHomeRecommend(){
  return request({
    url:'/home/recommend'
  })
}

export function getHomeGoods(type,page){
  return request({
    url: `/home/good/${type}/${page}`,
    
  })
}