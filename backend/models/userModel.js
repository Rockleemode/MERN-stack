const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator")

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//signup static method
userSchema.statics.signup = async function (email, password) {
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Not a valid Email!!!") 
    }
    if(!validator.isStrongPassword(password)){
        throw Error("the password need to be atleast 8 alphanumeric with a special char")
    }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("the Email is already registered");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const data = await this.create({ email, password: hash });
  return data;
};

//login static method

userSchema.statics.login = async function(email, password){
  if(!email || !password){
    throw Error("All fields must be filled")
  }

  const user = await this.findOne({ email })

  if(!user){
    throw Error("Email is not valid")
  }

  const userPassword = await bcrypt.compare(password, user.password)

  if(!userPassword){
    throw Error("the password is invalid")
  }

  return user;
}

module.exports = model("User", userSchema);
