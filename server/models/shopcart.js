const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopCartProduct = new Schema({
    createTime: {
        type: Date,
        default: Date.now
    },
    memberToken: {
        type: String
    },
    checked: {
        type: Boolean
    },
    product: {
        type: Object
    },
    counter: {
        type: Number
    },
    status: {
        type: Number
    }
}, {
    collection: 'shopCartProduct'
})

shopCartProduct.index({
    createTime: -1
})

module.exports = mongoose.model('shopCartProduct', shopCartProduct)