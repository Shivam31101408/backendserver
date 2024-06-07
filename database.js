const mongoose = require("mongoose")

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
const dbconnection = ()=>{
    const URI = "mongodb://localhost:27017/Users"
    mongoose.connect(URI , options)
}

module.exports = dbconnection;