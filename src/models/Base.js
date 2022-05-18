import mongoose from "mongoose"
const Schema = mongoose.Schema
class Base {
  constructor() {
    this.schema = new Schema(this.getSchema())
    this.Model = mongoose.model(this.getModelName(), this.schema)
  }
  getSchema() {
    throw Error('Model Class need getSchema function')
  }
  getModelName() {
    throw Error('Model Class need name')
  }
  create(data) {
    return this.Model.create(data)
  }
  delete(data) {
    return this.Model.remove(data)
  }
  update(id, data) {
    return this.Model.updateOne({ _id: id }, data)
  }
  find(data) {
    return this.Model.find(data)
  }
}

export default Base