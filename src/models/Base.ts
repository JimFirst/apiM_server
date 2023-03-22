import mongoose, { Schema, Model, SchemaDefinition, SchemaDefinitionType } from "mongoose"
import autoIncrement from 'mongoose-auto-increment'
abstract class Base<T> {
  public model: Model<T>
  public modelName: string
  constructor() {
    const schema = new Schema<T, Model<T>>(this.getSchema())
    this.modelName = this.getModelName()
    if (this.isNeedAutoIncrement()) {
      schema.plugin(autoIncrement.plugin, {
        model: this.modelName,
        field: this.getPrimaryKey(),
        startAt: 1,
        incrementBy: 1
      })
    }
    this.model = mongoose.model<T>(this.getModelName(), schema)
  }

  isNeedAutoIncrement() {
    return true;
  }

  getPrimaryKey(){
    return '_id';
  }

  abstract getSchema(): SchemaDefinition<SchemaDefinitionType<T>>
  abstract getModelName(): string

  create<T>(data: T) {
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