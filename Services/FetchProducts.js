import AxiosInstance from "./AxiosInstance";


export const FetchProducts=async()=>{
  const {data}= await  AxiosInstance.get('api/products')
  return data;
}