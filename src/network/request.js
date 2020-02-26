import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    //  baseURL:'http://106.54.54.237:8000/api/hy',
    // baseURL:'http://123.207.32.32:8000/api/hy',
    baseURL:'http://localhost:3000/mall/api',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    return err
  })
  instance.interceptors.response.use(response=>{
    return response.data
  },err=>{
    return err
  })
  //2.发送真正的网络请求,返回的就是一个promise对象
  return instance(config)
}
