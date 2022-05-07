const router = require('koa-router')()

router.prefix('/user')

/**
 * @swagger
 * /user/login:
 *   post:
 *     description: 登录
 *     tags: [用户]
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "user"
 *       name: "user"
 *       description: "用户名"
 *     - in: "password"
 *       name: "password"
 *       description: "密码"
 *     responses:
 *       200:
 *         description: 获取成功
 *         schema:
 *           type: object
 *           properties:
 *             code:
 *               type: number
 *             data:
 *               type: object
 */

router.post('/login', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/logout', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/register', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
