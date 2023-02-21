
import productModel from "@/models/productSchema";
import dbConnect from "@/Services/mongodb";



export default  async function handler(req, res) {
 const {method}=req;


dbConnect();


  if(method === 'GET'){
    
   res.send('yah')

  }

  if(method==='POST'){
   
     const product=await productModel.create(req.body)
     res.json(product);
  }

 


}
