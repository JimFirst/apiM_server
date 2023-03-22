import Base from './Base'
import { SchemaDefinition, SchemaDefinitionType } from 'mongoose'
import { IUser } from '../interface'

class User extends Base<IUser> {
  constructor() {
    super()
  }
  getSchema(): SchemaDefinition<SchemaDefinitionType<IUser>> {
    return {
      username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      email: String,
      phone: String,
      role: String,
      createTime: Date,
      updateTime: Date
    }
  }
  getModelName() {
    return 'User'
  }
  findByUsername(username: string) {
    return this.model.findOne({
      username: username
    })
  }
}

export default User