
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Hello = () => {
    const router=useRouter();
    return (  <>
    <h4>Hello</h4>
    <Button onClick={()=>{router.push('/Login')}}> Login </Button>
    </>);
}
 
export default Hello;