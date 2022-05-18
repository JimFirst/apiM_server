const { db } = require('../../config.json')
const mongoose = require('mongoose')
async function connect() {
  const options = {
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
    connectString = connectString + `?authSource=${config.db.authSource}`;
  }
  try {
    await mongoose.connect(connectString, options);
    console.log("mongodb数据库连接成功")
  } catch (error) {
    console.log("mongodb数据库连接失败", error)
  }
}
module.exports = connect()
