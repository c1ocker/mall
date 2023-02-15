import Axios from "axios";

//封装数据请求
export function request(config){
  const instance = Axios.create({
    // baseURL: 'http://152.136.185.210:7878/api/hy66',
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //axios拦截器
  //1.请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  //2.响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  });

  return instance(config)
}


export function request2(config){
  const instance = Axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  //axios拦截器
  //1.请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  //2.响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  });

  return instance(config)
}