import user from './user'
import Router from 'koa-router'
import Koa from 'koa'

const router = new Router()
const PREFIX = '/v1'
function route(app: Koa) {
  router.use(PREFIX, user.routes(), user.allowedMethods())
  app.use(router.routes())
  app.use(router.allowedMethods())
}
export default route