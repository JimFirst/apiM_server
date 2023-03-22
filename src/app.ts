import Koa from 'koa'
const app = new Koa()
import json from 'koa-json'
import koaOnerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import path from 'path'
import route from './routes'
import docs from './docs'
import koaStatic from 'koa-static'
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
app.use(koaStatic(path.join(__dirname, '../public')))

// docs 文档
docs(app)
// routes
route(app)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app
