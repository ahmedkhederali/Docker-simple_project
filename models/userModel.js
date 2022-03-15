const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"User Must have A USERNAME"],
    },
    password:{
        type:String,
        required:[true,"User Must have A Password"]
    }
})
module.exports=mongoose.model("User",userSchema)