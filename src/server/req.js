import axios from 'axios'
import { Message,Loading } from 'iview';



let instance = axios.create({
  timeout: 20 * 1000, // 配置请求超时时间
  headers: { // 定义统一的请求头部
    post: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  },
  withCredentials: true, // 跨域请求的时候允许带上cookie发送到服务器
})


function request(url,params,options={loading:true,mock:false,error:true},method){
  let loadingInstance;
  // 请求前loading
  if(options.loading) loadingInstance = Loading.service();
  return new Promise((resolve,reject)=>{
      let data = {}
      // get请求使用params字段
      if(method =='get') data = {params}
      // post请求使用data字段
      if(method =='post') data = {data}
      // 通过mock平台可对局部接口进行mock设置
      if(options.mock)url='http://www.mock.com/mock/xxxx/api';
      instance({
          url,
          method,
          ...data
      }).then((res)=>{
          // 此处作用很大，可以扩展很多功能。
          // 比如对接多个后台，数据结构不一致，可做接口适配器
          // 也可对返回日期/金额/数字等统一做集中处理
          if(res.status === 0){
              resolve(res.data);
          }else{
              // 通过配置可关闭错误提示
              if(options.error) Message.error(res.message);
              reject(res);
          }
      }).catch((error)=>{
          Message.error(error.message)
      }).finally(()=>{
          loadingInstance.close();
      })
  })
}

// 封装GET请求
function get(url,params,options){
  return request(url,params,options,'get')
}
// 封装POST请求
function post(url,params,options){
  return request(url,params,options,'post')
}


export default { get, post }