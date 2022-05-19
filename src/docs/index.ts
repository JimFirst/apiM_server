import { koaSwagger } from 'koa2-swagger-ui'
import swagger from './swagger'
function docs(app) {
  app.use(koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: '/docs', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    },
  }))
  app.use(swagger.routes(), swagger.allowedMethods())
}
export default docs