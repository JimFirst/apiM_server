const { db } = require('../../config.json')
const mongoose = require('mongoose')
interface Options {
  maxPoolSize: number
  connectTimeoutMS: number
  useNewUrlParser: boolean
  bufferCommands: boolean
  user?: string
  pass?: string
}
async function connect() {
  const options: Options = {
    maxPoolSize: 50,
    connectTimeoutMS: 2500,
    useNewUrlParser: true,
    bufferCommands: true
  }
  if (db.user) {
    options.user = db.user
    options.pass = db.pass
  }
  let connectString = `mongodb://${db.servername}:${db.port}/${db.DATABASE}`;
  if (db.authSource) {
    connectString = connectString + `?authSource=${db.authSource}`;
  }
  try {
    await mongoose.connect(connectString, options);
    console.log("mongodb数据库连接成功")
  } catch (error) {
    console.log("mongodb数据库连接失败", error)
  }
}
export default connect()