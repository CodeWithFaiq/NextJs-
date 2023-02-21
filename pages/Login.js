import { Google } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Login = () => {
   const router=useRouter();
const [user,setUser]=useState({
    email:'',
    password:''
})

const handleGoogle=async()=>{
    const data=await signIn('google',{
        
        redirect:false,

    })
    console.log(data);
}

const handleLogin=async()=>{
    const data=await signIn('credentials',{
 
        redirect:false,
        callbackUrl:'/',
        email:user.email,
        password:user.password

    })

console.log(data);


}

    return ( <>
    
    <Box>
        <TextField
        type='email'
         value={user.email}
         placeholder='Enter Email'
         onChange={(e)=>{setUser({...user,email:e.target.value})}}
        />
    </Box>

    <Box>
        <TextField
        type='password'
         value={user.password}
         placeholder='Enter Password'
         onChange={(e)=>{setUser({...user,password:e.target.value})}}
        />
    </Box>
    
    <Box>

        <Button variant='contained' color='primary' onClick={handleLogin} > LogIn </Button>

        <Button onClick={handleGoogle} variant='contained' color='secondary' endIcon={<Google/>} > Sign in with google </Button>
    </Box>
    
    </> );
}
 
export default Login;