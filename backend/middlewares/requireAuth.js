const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) =>{
    const { authorization } = req.headers;

    if(!authorization){
       return res.status(401).json({error:"authorization is require"})
    }
    
    try{
     const token = authorization.split(' ')[1]
     const { _id } = jwt.verify(token, process.env.SECRET)
     req.user = await User.findOne({ _id }).select("_id")
     next();
    }
    catch (error){
        console.error(error.message)
        res.status(401).json({error:"authorization is invalid"})
    }
    
}

module.exports = requireAuth;