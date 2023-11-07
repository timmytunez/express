// const express = require('express')
// const productRouter = express.Router()

// productRouter.get('/product', (req,res)=>{
//     res.send([
//         {
//             name:'iphone 12',
//             price: '$1200',
//             star:5,
//             desc: 'black'

//         },
//         {
//             name:'iphone 15',
//             price: '$1800',
//             star:5,
//             desc: 'white'

//         }
//     ])
// })

// productRouter.get('/product/:id', (req,res)=>{
//     res.send(
//         {
//                 name:'iphone 12',
//                 price: '$1200',
//                 star:5,
//                 desc: 'black'   
//         }
//     )

// })
// productRouter.put('/product/:id', (req,res)=>{
//     res.send('update sucessfull')
// })
// productRouter.delete('/product/:id', (req,res)=>{
//     res.send('delete sucessfull')
// })




const express = require("express")
const router = express.Router()

router.get('/products', (req, res) => {
    res.send('all Products')
})

router.get('/products/:id', (req, res) => {
    res.send('single Products')
})

router.post('/products', (req, res) => {
    res.send('new Product added')
})

router.put('/products/:id', (req, res) => {
    res.send('updated Products')
})

router.delete('/products/:id', (req, res) => {
    res.send('deleted Products')
})


module.exports = router