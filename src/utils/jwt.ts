import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'
interface ITokenInfo {
  exp: number
  userInfo: IUserInfo
}
interface IUserInfo {
  name: string
  role: string
}
export class Jwt {
  static generateToken(userInfo: IUserInfo) {
    const created = Date.now();
    //私钥 加密
    const cert = fs.readFileSync(path.join(__dirname, './private.key')); // 私钥 可以自己生成
    const token = jwt.sign(
      {
        userInfo,
        exp: created + 60 * 30 * 1000
      },
      cert,
      { algorithm: 'RS256' }
    );
    return token;
  }
  // 校验token
  static verifyToken(token: string) {
    const cert = fs.readFileSync(path.join(__dirname, './public.key'));
    let res;
    try {
      //公钥 解密
      const result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
      const { exp = 0, userInfo } = result as ITokenInfo
      const current = Date.now();
      //验证时效性
      if (current <= exp) {
        res = userInfo || {};
      }
    } catch (e) {
      res = 'err';
    }
    return res;
  }
}