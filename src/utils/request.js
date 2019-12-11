import axios from 'axios'
// import {
//   Message
// } from 'element-ui'
// import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://api.cat-shop.penkuoer.com', // process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(

  response => {
    const res = response.data

    return res
  },
  // error => {
  //   console.log('err' + error) // for debug
  //   Message({
  //     message: error.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   })
  //   return Promise.reject(error)
  // }
)

/**
 * 发起post请求
 * @param {*} url
 * @param {*} data
 */
export function post(url, data) {
  return service.post(url, data)
}

/**
 * 发起get请求
 * @param {*} url
 * @param {*} params
 */
export function get(url, params) {
  return service.get(url, {
    params
  })
}

/**
 * 发送put请求
 * @param {*} url
 * @param {*} data
 */
export function put(url, data) {
  return service.put(url, data)
}

/**
 * 删除
 * @param {*} url
 */
export function del(url) {
  return service.delete(url)
}

export default service