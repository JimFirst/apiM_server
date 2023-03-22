import NodeRSA from 'node-rsa'
import fs from 'fs'
import path from 'path'

// 公钥加密
const publicDer = fs.readFileSync(path.join(__dirname, './private.key'));
function encrypt(text: string) {
  const key = new NodeRSA(publicDer)
  key.setOptions({
    encryptionScheme: 'pkcs1'
  })
  return key.encrypt(text, 'base64')
}

// 私钥解密
const privateDer = fs.readFileSync(path.join(__dirname, './private.key'));
function decrypt(cipherText: string) {
  const key = new NodeRSA(privateDer)
  key.setOptions({
    encryptionScheme: 'pkcs1'
  })
  return key.decrypt(cipherText, 'utf8')
}

export {
  encrypt,
  decrypt
}