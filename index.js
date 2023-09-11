const express = require('express')
const mongoose = require('mongoose');
var mongo = require('mongodb');

const app = express()
const path = require('path')

app.use(express.json())
app.use("/auth",require('./routes/usersRoutes'))
app.listen(3000,()=>{
    console.log('port connected')
})