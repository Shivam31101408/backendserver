const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/Users"
 
const dbconnection = async()=>{
    await mongoose.connect(URI)
    console.log("database connection success")
}

module.exports = dbconnection