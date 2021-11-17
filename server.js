const express = require('express')
const app =require("./app")
const server = require('http').Server(app)
const port = process.env.PORT ||3001
server.listen(port ,()=>{
    console.log(`app is running at port :${port}`)
})
