const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//jwt generator
const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.SECRET, {expiresIn:"3d"})
}


//login controller
const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body
        const user = await User.login(email, password)

        //token creation
        const token = createToken(user._id)
        res.status(200).json({user, token})
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({error:error.message})
    }
}

//signup controller

const signupUser = async (req, res) =>{
    try{    
    const { email, password } = req.body
    const data = await User.signup(email, password)
    
    //token
    const token = createToken(User._id)

    res.status(200).json({email, token})
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({error:error.message})
    }
}

module.exports = {loginUser, signupUser}