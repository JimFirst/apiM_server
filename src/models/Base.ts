import mongoose, { Schema, Model } from "mongoose"
import autoIncrement from 'mongoose-auto-increment'
abstract class Base {
  public schema: Schema | undefined
  public model: Model<unknown>
  public modelName: string
  constructor() {
    this.schema = new Schema(this.getSchema())
    this.modelName = this.getModelName()
    if (this.isNeedAutoIncrement() === true) {
      this.schema.plugin(autoIncrement.plugin, {
        model: this.modelName,
        field: this.getPrimaryKey(),
        startAt: 1,
        incrementBy: 1
      })
    }
    this.model = mongoose.model(this.getModelName(), this.schema)
  }

  isNeedAutoIncrement() {
    return true;
  }

  getPrimaryKey(){
    return '_id';
  }

  abstract getSchema(): object
  abstract getModelName(): string

  create<T extends {}>(data: T) {
    data = {
      ...data,
      createTime: Date.now(),
      updateTime: Date.now()
    }
    return this.model.create(data)
  }

  deleteById(id: number) {
    return this.model.remove({ _id: id })
  }

  updateById(id: number, data: any) {
    data = {
      ...data,
      updateTime: Date.now()
    }
    return this.model.updateOne({ _id: id }, data)
  }

  findById(id: number) {
    return this.model.find({_id: id})
  }
}

export default Base