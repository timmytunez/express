const express = require('express')
const app = express()
const port = 7600

app.get('/', (req,res)=>{
    res.send('welcome to homepage')
})

const productRoutes = require('./product/product')
app.use(productRoutes)

app.listen(port, ()=>{
    console.log('server started sucessfully')
})