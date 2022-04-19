const router = require('koa-router')()

router.prefix('/user')

/**
 * @swagger
 * /v1/menu/list/${appId}:
 *   post:
 *     description: 获取菜单列表
 *     tags: [菜单模块]
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "查询参数"
 *       schema:
 *         $ref: "#/definitions/Menu"
 *     responses:
 *       200:
 *         description: 获取成功
 *         schema:
 *           type: object
 *           properties:
 *             total:
 *               type: number
 *             rows:
 *               type: array
 *               items:
 *                   $ref: '#/definitions/MenuModel'
 *
 */

router.get('/login', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/logout', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/register', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
