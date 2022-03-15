// Store All Environment variable
module.exports={
    MONGO_IP:process.env.MONGO_IP || "mongo",    // we have DNS By default in Docker so if no .MONGO_IP this will use mongo as a refrence 
    MONGO_PORT:process.env.MONGO_PORT || "27017",
    MONGO_USER:process.env.MONGO_USER,
    MONGO_PASSWORD:process.env.MONGO_PASSWORD,
    REDIS_URL:process.env.REDIS_URL || "redis",   //redis meaniing dns if no  .MONGO_IP this will use mongo as a refrence 
    REDIS_PORT:process.env.REDIS_PORT || 6379, // default port of redis is 6379
    SEESION_SECRET:process.env.SEESION_SECRET,
}