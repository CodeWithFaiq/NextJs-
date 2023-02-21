import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';


const Header = () => {
const router=useRouter();
  const handleLogin=()=>{
    router.push('/Login')
  }
  
  const handleLogout=()=>{
    signOut();
  }

const {data,status}=useSession();

    return ( <>
    
    <AppBar position='static'>

    <Toolbar sx={{backgroundColor:'lightgrey'}}>
      <Typography> <Link href='/about-us'> About Us </Link>  </Typography>
      <Typography> <Link href='/contact-us'> Contact Us </Link>  </Typography>
      <Box sx={{marginLeft:'auto'}}>
         {data && status==='authenticated' ? ( <Box sx={{display:'flex',alignItems:'center'}}> <Typography variant='body2'> Welcome {data.user.name} </Typography>
         <Button variant='contained' color='primary' onClick={handleLogout}> LogOut </Button>
          </Box> 
         
         ) :(<Button variant='contained' color='primary' onClick={handleLogin} > Login  </Button>) }
      </Box>
    </Toolbar>

    </AppBar>
    
    </> );
}
 
export default Header;