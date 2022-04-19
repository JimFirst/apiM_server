const users = require('./users')
const router = require('koa-router')()
const FIX = '/v1'
function route(app) {
  router.use(FIX, users.routes(), users.allowedMethods())
  app.use(router.routes(), router.allowedMethods())
}
module.exports = route