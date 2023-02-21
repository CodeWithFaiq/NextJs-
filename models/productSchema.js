import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number
})

const productModel=mongoose.model('products',productSchema);

export default productModel;