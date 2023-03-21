const config = require('../../config.json')
// import mongoose from 'mongoose'
const mongoose = require('mongoose')
import autoIncrement from 'mongoose-auto-increment'

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
  const dbConfig = config.db
  if (dbConfig.user) {
    options.user = dbConfig.user
    options.pass = dbConfig.pass
  }
  let connectString = `mongodb://${dbConfig.servername}:${dbConfig.port}/${dbConfig.DATABASE}`;
  if (dbConfig.authSource) {
    connectString = connectString + `?authSource=${dbConfig.authSource}`;
  }
  try {
    const db = await mongoose.connect(connectString, options);
    autoIncrement.initialize(db)
    console.log("mongodb数据库连接成功")
  } catch (error) {
    console.log("mongodb数据库连接失败", error)
  }
}
export default connect()
