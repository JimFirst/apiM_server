import Base from "./Base";
import { RouterContext } from 'koa-router';
import { getSingleInstance, getResponse } from '../utils'
import UserModel from '../models/User';
import { IUser } from '../interface'

class User extends Base {
  userInstance: UserModel
  constructor(ctx: RouterContext) {
    super(ctx)
    this.userInstance = getSingleInstance(UserModel)
  }

  async login(ctx: RouterContext) {
    const { username, password } = ctx.request.body as IUser
    const result = this.userInstance.findByUsername(username)
    if (!result) {
      return ctx.body = getResponse(null, 408,'用户名或密码错误')
    }
  }

  async register(ctx: RouterContext) {
    const data = ctx.request.body as IUser
    const username = data.username
    const result = await this.userInstance.findByUsername(username)
    if (!!result) {
      return ctx.body = getResponse(null, 408,'用户已存在')
    }
    await this.userInstance.create(data)
    ctx.body = getResponse('注册成功')
  }
}

export default User