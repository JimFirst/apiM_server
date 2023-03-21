import Router from 'koa-router'

function createAction(router: Router, routerController, action: string, path: string, method: string, middlewares: Function[]) {
  router[method](path, ...middlewares,function (ctx) {
    const controller = new routerController(ctx)
    controller[action].call(controller, ctx)
  })
}

export {
  createAction
}