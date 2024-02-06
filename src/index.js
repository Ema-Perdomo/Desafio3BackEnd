import express from 'express'
import { ProductManager } from './config/ProductManager'

const app = express()
const PORT = 8000
const productManager = new ProductManager('./products.json')

app.get('/',(req,res)=>{
    res.send('Hola desde mi primer server en Express') //Enviame el sig. mensaje:
})
app.get('/products',async (req,res)=>{

    const {limit} = req.query
    const prods = await productManager.getProducts()
    const limite = parseInt(limit)

    //NaN en If es false
    if (limite ) {//Si el string es no numerico devuelve NaN
        if (limite < 0) {
            res.send('Ingrese valor valido en los queries')
        } else{
            const prodsLimit = prods.slice(0, limit) //Slice funciona con limit = undefined | "5" viene del query es = 5 en Js
            res.send(prodsLimit)
        }
    } else {
        res.send('Ingrese valor valido en los queries')
    }

    
})

app.get('/productos/:idProd', async (req,res)=>{
    const idProducto = req.params.idProd;
    const prod = await productManager.getProductsById()
    
    res.send(prod)
})

app.listen(PORT,()=>{
    console.log(`Server on port: ${PORT}` )
})
