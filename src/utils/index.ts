export * from './singleInstance'
export * from './route'
export * from './jwt'
export * from './cipher'

function createResponse<T>(data: T, code = 0, message = '成功') {
  return {
    code: code,
    message: message,
    data: data
  }
}
export {
  createResponse
}