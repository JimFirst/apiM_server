import { RouterContext } from 'koa-router';

class Base {
  constructor(ctx) {}
  init(ctx: RouterContext) {
    // token校验
    const whiteList = []
  }
}

export default Base