import {request} from './request'

export function getCategory(){
  return request({
    url:'/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: `/subcategory/${maitKey}`,
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: `/categorydetail/${miniWallkey}/${type}`
  })
}
