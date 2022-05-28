const express = require('express')
require('dotenv').config()
const app = express()
app.listen(process.env.PORT,()=>{
    console.log(1)
})
app.get('/',(req,res)=>{
    res.status(200).json({message:'Hello'})
})
