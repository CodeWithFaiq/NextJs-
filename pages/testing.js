import { getSession } from 'next-auth/react';
import React from 'react';


const Testing = () => {
    return ( <>
    
    <h4>Welcome to Testing</h4>
    
    </> );
}

export async function getServerSideProps(context){
const session=await getSession(context);
if(!session)
{
    return{
        redirect:{
            destination:'/'
        }
    }
}

return{
    props:{

    }
}
}
 
export default Testing;