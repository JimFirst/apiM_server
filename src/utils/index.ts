export * from './singleInstance'
export * from './route'

function getResponse<T>(data: T, code = 0, message = '成功') {
  return {
    code: code,
    message: message,
    data: data
  }
}
export {
  getResponse
}