const router=require('express').Router()
const {getAllPosts,getsinglePost,createPost,updatePost,deletePost}=require('../controllers/postCtrl')
router.route("/").get(getAllPosts).post(createPost)
router.route("/:id").get(getsinglePost).patch(updatePost).delete(deletePost)

module.exports=router