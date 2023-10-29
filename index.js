const express = require('express');
const cors = require('cors')
const { connection } = require('./db');
const { userRouter } = require('./routes/user.router');
const app =express();
app.use(express.json());
require("dotenv").config()
app.use(cors)
app.use("/user",userRouter)

const PORT = process.env.PORT
app.listen(PORT,async()=>{
    await connection
    console.log("DB is connected")
})