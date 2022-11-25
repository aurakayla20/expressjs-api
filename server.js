const express = require('express')
const app = express()
const port = 3000

const connectDB = require('./config/db')

const userrouter = require('./router/user')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(userrouter)

connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})