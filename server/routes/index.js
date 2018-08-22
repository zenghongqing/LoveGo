const Router = require('koa-router')
const controller = require('../controller')
const router = new Router()
const bodyParser = require('koa-bodyparser')
// 启动数据库
module.exports = (app) => {
    router.post('/reg', controller.Reg)
    router.post('/login', controller.Login)
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods())
}
