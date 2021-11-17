const express = require('express')
require('./src/db.conn')
const app = express()
const productsRoute = require('./routes/products.routes')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/products',productsRoute)
module.exports = app
