import  express  from 'express';
import asynHandler from 'express-async-handler'
const router =express.Router()
import Product from "../models/productModel.js";
  
//@desc  FETCH ALL PRODUCT
//@route  GET /api/products
//@access Public route
router.get('/' , asynHandler( async(req,res) =>{
    const products = await Product.find({

    })
    res.json(products)
}))

//@desc  FETCH single PRODUCT
//@route  GET /api/products/:id
//@access Public route


router.get('/:id', asynHandler( async (req,res) =>{
    const product = await Product.findById(req.params.id)
    if (product){
    res.json(product)
  } else{
      res.status(404)
      throw new Error("Product Not found")
  }
}))

export default router