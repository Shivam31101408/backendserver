const express = require("express")
const cors = require("cors")
const app = express()
const bodyparser = require("body-parser")
const dbconnection = require("./database")
app.use(express.json())
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))
const users = require('./router')
app.use('/api/v1' , users)

app.use(bodyparser.json)

port = 4000;

app.listen(port , ()=>{
    dbconnection()
    console.log("database connection success")
})