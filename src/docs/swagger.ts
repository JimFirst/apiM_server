import Router from 'koa-router'
const router = new Router()
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
const swaggerDefinition = {
  info: {
    title: 'API',
    version: '1.0.0',
    description: 'API',
  },
  host: 'localhost:3300',
  basePath: '/v1' // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routes/*.js')], // 写有注解的router的存放地址
};

const swaggerSpec = swaggerJSDoc(options)

// 通过路由获取生成的注解文件
router.get('/docs', async function (ctx) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
})

export default router
