const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Post Must have Title"]
    },
    body:{
        type:String,
        required:[true,"Post Must have body"]
    }
})
module.exports=mongoose.model("Post",postSchema)