interface IUser {
  username: string
  password: string
  email?: string
  phone?: string
  role?: string
  createTime?: Date,
  updateTime?: Date
}

export {
  IUser
}