import Koa from 'koa'
const app = new Koa()
import json from 'koa-json'
import koaOnerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import path from 'path'
import route from './routes'
import docs from './docs'
// db
require('./utils/db')

// error handler
koaOnerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(path.join(__dirname, '../public')))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = +new Date() - +start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// docs 文档
docs(app)
// routes
route(app)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
