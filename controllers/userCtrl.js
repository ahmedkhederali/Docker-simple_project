const Users=require('../models/userModel')
const bcrypt=require('bcryptjs')
const signUp=async(req,res)=>{
    const {username,password}=req.body;
    try {
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt)
        const user=await Users.create(
            {
                username,
                password:hashPassword
            })
        res.status(201).json({msg:"User Created"})
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
//login Functionality
const login=async(req,res)=>{
    const {username,password}=req.body
    try {
        const user=await Users.findOne({username})
        if(!user) return res.status(400).json({msg:"There "})
        const isCorrect=await bcrypt.compare(password,user.password)
        if(!isCorrect) return res.status(400).json({msg:"Password Is incorrect"})
        res.status(200).json({msg:"Success Login"})
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
module.exports={signUp,login}