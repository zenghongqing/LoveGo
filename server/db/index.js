const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/LoveGo')

let db = mongoose.connection
// 防止Mongoose：mpromise错误
mongoose.Promise = global.Promise
db.on('open', () => {
    console.log('数据库连接成功')
})
db.on('error', () => {
    console.log('数据库连接失败')
})
db.on('disconnect', () => {
    console.log('数据库连接断开')
})
module.exports = db
