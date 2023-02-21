import AxiosInstance from '@/Services/AxiosInstance';
import { FetchProducts } from '@/Services/FetchProducts';
import React from 'react';

const ProductDescription = ({product}) => {
    return ( <>
    <h4>hello</h4>
   {product.name}
    </> );
}
 



export default ProductDescription;

export async function getStaticPaths(){
const {data}=await AxiosInstance.get('api/products?limit=50')

const ids=data.map((item)=>{
    return{
        params:{
            id:item._id
        }
    }
})

return{
    paths:ids,
    fallback:false
}

}

export async function getStaticProps({params}){
const {data}=await AxiosInstance.post('api/products',{_id:params.id})

   return{
    props:{
product:data
    }
   }

}

