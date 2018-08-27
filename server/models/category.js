const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopCategoryInfo = new Schema({// 商品分类
    Id: {
        type: Number,
        unique: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    parentId: {
        type: Number
    },
    image_url: {
        type: Array
    },
    name: {
        type: String
    },
    desc: {
        type: String
    }
}, {
    collection: 'shopCategoryInfo'
})
shopCategoryInfo.index({
    Id: 1,
    parentId: -1
})

module.exports = mongoose.model('shopCategoryInfo', shopCategoryInfo)