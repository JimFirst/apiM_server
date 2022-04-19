const { koaSwagger } = require('koa2-swagger-ui')
const swagger = require('./swagger')
const path = require('path')
function docs(app) {
  app.use(koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: '/docs', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    },
  }))
  app.use(swagger.routes(), swagger.allowedMethods())
}
module.exports = docs