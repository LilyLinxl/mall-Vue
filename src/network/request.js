import axios from 'axios'
import Vue from 'vue'
export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    //  baseURL:'http://106.54.54.237:8000/api/hy',
    // baseURL:'http://123.207.32.32:8000/api/hy',
    baseURL:'http://localhost:3000/mall/api',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    if(localStorage.token){
      config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
  },err=>{
    return Promise.reject(err)
  })
  instance.interceptors.response.use(response =>{//前端设置响应拦截，通用错误处理
    return response.data
  },err=>{
    if(err.response.data.message){
      Vue.prototype.$toast.show(err.response.data.message,2000)
      if(err.response.status === 401){
        router.push('/login')
      }
    }
    return Promise.reject(err)
  })
  //2.发送真正的网络请求,返回的就是一个promise对象
  return instance(config)
}
