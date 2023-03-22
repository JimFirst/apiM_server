const config = require('../../config.json')
import mongoose, { ConnectOptions } from 'mongoose'
// const mongoose = require('mongoose')
import autoIncrement from 'mongoose-auto-increment'

async function connect() {
  const options: ConnectOptions = {
    maxPoolSize: 50,
    connectTimeoutMS: 2500,
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
    autoIncrement.initialize(db.connection)
    console.log("mongodb数据库连接成功")
  } catch (error) {
    console.log("mongodb数据库连接失败", error)
  }
}
export default connect()
