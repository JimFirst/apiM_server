import { Jwt, createResponse } from '../utils'
import { RouterContext } from 'koa-router'

export default async function verifyAtuh(ctx: RouterContext, next) {
  const authorization = ctx.headers.authorization
  if (!authorization) {
    return ctx.body = createResponse(null, 401, '暂无权限')
  }
  const token = authorization.replace('Bearer ', '');
  try {
    Jwt.verifyToken(token)
    await next()
  } catch (error) {
    ctx.body = createResponse(null, 403, '暂无权限')
  }
}