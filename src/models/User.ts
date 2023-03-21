import Base from './Base'

class User extends Base {
  constructor() {
    super()
  }
  getSchema() {
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