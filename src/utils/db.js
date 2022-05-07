const { db } = require('../../config.json')
const mongoose = require('mongoose')
function connect() {
  const options = {
    useMongoClient: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval:500,
    poolSize: 10,
    connectTimeoutMS: 10000,
    bufferMaxEntries: 10,
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
  const db = mongoose.connect(connectString, options);
  mongoose.connection.on("connected", () => {
    console.log("mongodb数据库连接成功")
  });
  mongoose.connection.on("error", (error) => {
    console.log("mongodb数据库连接失败", error)
  });
  return db
}
module.exports = {
  connect
}
