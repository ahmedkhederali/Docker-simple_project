const Posts=require('../models/postModels');
const getAllPosts=async(req,res)=>{
    try {
        const posts=await Posts.find()
        res.status(200).json({
            status:'success',
            count:posts.length,
            data:{
                posts
            }
        })
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
// git single post
const getsinglePost=async(req,res)=>{
    try {
        const post=await Posts.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data:{
                post
            }
        })
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
//Create post 
const createPost=async(req,res)=>{
    try {
        console.log(req.body)
        const {title,body}=req.body;
        const post=await Posts.findOne({title})
        if(post) return res.status(400).json({msg:"This Post Already Exists."})
        const newPOst= await Posts.create(req.body)
        res.status(200).json({msg:"Post Is Created.."})
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
//Update Posts
const updatePost=async(req,res)=>{
    try {

        const post=await Posts.findByIdAndUpdate(req.params.id,req.body,
            {
                new:true,
                runValidators:true
            })
        if(!post) return  res.status(400).json({msg:"No Post With This ID"})
        res.status(200).json({msg:"Updated Posts"})
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
//delete post
const deletePost=async(req,res)=>{
    try {

        const post=await Posts.findByIdAndDelete(req.params.id)
        if(!post) return  res.status(400).json({msg:"No Post With This ID"})
        res.status(200).json({msg:"Delete Post"})
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
}
module.exports={getAllPosts,getsinglePost,createPost,updatePost,deletePost}