import jwt from 'jsonwebtoken';
import { RouterContext } from 'koa-router'

export default async function verifyAtuh(ctx: RouterContext, next) {
  console.log('鉴权');
  const authorization = ctx.headers.authorization
  if (!authorization) {
    return ctx.body = '405'
  }
  const token = authorization.replace('Bearer ', '');
  try {
    jwt.verify(token, 'secret', {
      algorithms:['RS256']
    })
    await next()
  } catch (error) {
    ctx.body = '403'
  }
}