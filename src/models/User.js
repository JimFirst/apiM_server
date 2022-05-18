import Base from './Base'

class User extends Base {
  constructor() {
    super()
  }
  getSchema() {
    return {
      username: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      email: String,
      phone: String,
      role: String
    }
  }
  getModelName() {
    return 'User'
  }
}

export default User