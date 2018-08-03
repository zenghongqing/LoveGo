import axios from './axios.js'
export default {
    // 获取首页轮播图
    getIndexBannerPics () {
        return axios.get('/api/indexBannerPic')
    }
}