const user = require('./user')
const router = require('koa-router')()
const PREFIX = '/v1'
function route(app) {
  router.use(PREFIX, user.routes(), user.allowedMethods())
  app.use(router.routes(), router.allowedMethods())
}
module.exports = route