import Base from "./Base";
import { RouterContext } from 'koa-router';
import { getSingleInstance, createResponse, encrypt, decrypt, Jwt } from '../utils'
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
    const result = await this.userInstance.findByUsername(username)
    if (!result) {
      return ctx.body = createResponse(null, 408,'用户名或密码错误')
    }
    if (password === decrypt(result.password)) {
      return ctx.body = createResponse({
        token: Jwt.generateToken(result.id)
      })
    }
  }

  async register(ctx: RouterContext) {
    const data = ctx.request.body as IUser
    const username = data.username
    const result = await this.userInstance.findByUsername(username)
    if (result) {
      return ctx.body = createResponse(null, 408,'用户已存在')
    }
    data.password = encrypt(data.password)
    await this.userInstance.create(data)
    ctx.body = createResponse('注册成功')
  }
}

export default User