const { model } = require("mongoose");
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel')


const signupUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('all fields are mandatory');
    }
    res.json({message:"register the user"})
})

//@accsess public
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"login the user"})
})
module.exports = {signupUser,loginUser}