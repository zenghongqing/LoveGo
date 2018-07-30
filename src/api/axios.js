import axios from 'axios'
// 设置全局axios默认值
axios.defaults.timeout = 5000 // 超时验证
// 初始化默认post header
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 初始化axios实例
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // 在发送请求前处理
    return config
}, (err) => {
    // 对响应错误操作
    return Promise.reject(err)
})
// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // 对响应数据操作
    return response
}, (err) => {
    // 对响应错误操作
    return Promise.reject(err)
})

export default axios