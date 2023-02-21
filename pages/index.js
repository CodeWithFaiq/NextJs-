import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/system'
import { AppBar, Card, CardMedia, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AxiosInstance from '@/Services/AxiosInstance'
import { ArrowForward } from '@mui/icons-material'
import Link from 'next/link'
import { FetchProducts } from '@/Services/FetchProducts'
import { useSession } from 'next-auth/react'



const inter = Inter({ subsets: ['latin'] })


export default function Home({dataa}) {



  

  const handleForwardArrow=()=>{
    setPage(page+1);
  }

const [products,setProducts]=useState(dataa)

const [page,setPage]=useState(1);

useEffect(()=>{
  if(page>1){
AxiosInstance.get(`api/products?page=${page}`).then((res)=>{
  setProducts(res.data)
}).catch((e)=>{
  console.log(e)
})
  }
},[page])



  


  return (
    <>
   {/* {session?  <Typography> {session.data.user.name} </Typography> :'' } */}


    <IconButton onClick={handleForwardArrow}> <ArrowForward/> </IconButton>
    <Container> 
    <Grid container gap={2}>

    
      {products.map((item)=>{
        return(
          <Grid item  key={item._id} lg={3} >
           <Link key={item._id}  href={`/${item._id}`} >
           <Card >
            <CardMedia
            component='img'
            src={`${item.image}`}
             height='300'
             width={'140'}
            
            />
           </Card>
           </Link> 
            </Grid>
        )
      })}
      </Grid>
      </Container>
    </>
  )
}


export async function getStaticProps(){
 const dataa=await FetchProducts();

 

return{
  props:{
dataa
  }
}
}



