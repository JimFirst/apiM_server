import mongoose, { Schema, Model } from "mongoose"
abstract class Base {
  public schema: Schema<any, Model<any, any, any, any>, {}, {}> | undefined
  public Model: Model<unknown, {}, {}, {}>
  constructor() {
    this.schema = new Schema(this.getSchema())
    this.Model = mongoose.model(this.getModelName(), this.schema)
  }
  abstract getSchema(): object
  abstract getModelName(): string
  create(data: any) {
    return this.Model.create(data)
  }
  delete(data: any) {
    return this.Model.remove(data)
  }
  update(id: any, data: any) {
    return this.Model.updateOne({ _id: id }, data)
  }
  find(data: any) {
    return this.Model.find(data)
  }
}

export default Base