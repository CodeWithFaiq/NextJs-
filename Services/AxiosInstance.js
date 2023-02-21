import axios from "axios";


const AxiosInstance=axios.create({
    baseURL:'http://localhost:5000/',
    headers:{
        "Content-Type":"application/json"
    }
    
})

AxiosInstance.defaults.headers.common["x-auth-token"] = typeof window !== 'undefined' ? localStorage.getItem('token') :''

export default AxiosInstance;