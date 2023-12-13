const mongoose = require('mongoose')
const LoginSchema = new mongoose.LoginSchema({
  email: {
    require: true,
    type: String,
    unique: true,
  }
  , password: {
    require: true,
    type: String,
  }
})
const Login = mongoose.model('Login', LoginSchema)
const LoginUser = new LoginUser({
  email: "xxxxxxxxxxxxxx",
  password: "xxxxxxxxxxxx"
})
module.exports = Login 