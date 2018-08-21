const router = require('koa-router')()
const controller = require('../controller')
// 启动数据库
require('../db')
module.exports = (app) => {
    router.get('/reg', controller.Reg)
    router.get('/login', controller.Login)
    app.use(router.routes()).use(router.allowedMethods())
}
