const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/MongoDemo'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const StudentRouter = require('./routes/curd')
app.use('/student',StudentRouter)


app.listen(9000, () => {
    console.log('Server started')
}) 
//mongodb.com/try/download/community2
