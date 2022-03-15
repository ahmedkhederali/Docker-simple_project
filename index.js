require('dotenv')
const express=require("express")
const mongoose=require('mongoose');
const cors=require('cors')
const app = express()
const {MONGO_IP,MONGO_PORT,MONGO_USER,MONGO_PASSWORD, REDIS_URL, REDIS_PORT, SEESION_SECRET}=require('./config/config')
const MONGO_URL_DB=`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
const postRouter=require('./routes/postRoutes.js')
const userRouter=require('./routes/userRoutes')



//makeing infinty loop when ther is an error it will retry to connect again after 5 seconds
const coneectRetry=()=>{
    mongoose.connect(MONGO_URL_DB)
    .then(()=>console.log("Successfuly Connect"))
    .catch(()=>{
        console.log("Connect Faild");
        setTimeout(coneectRetry,5000)
    })
}
// call function
coneectRetry()
app.enable("trust proxy")
app.use(cors({}))
app.use(express.json())

app.get("/app/vi",(req,res)=>{
    res.status(200).send("<h1>Rahma Ali ramadan Khdder !!</h1>")
    console.log("Run-----------")
})

app.use("/app/vi/posts",postRouter)
app.use("/app/vi/users",userRouter)
const port =process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`Listening ON Port ${port}`)
})