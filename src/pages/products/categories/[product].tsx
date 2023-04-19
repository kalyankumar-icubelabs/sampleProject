import { useRouter } from "next/router";
import {useEffect,useState} from 'react';
import{Container,List} from "@mantine/core"
import ProductsList from "@/components/ProductsList"
export default function ProductPage(){
    const [productArray,setProduct]=useState([])
    const[loading,setLoading]=useState(true)
    const router=useRouter()
    const pathId=router.query
     
     useEffect(()=>{
        setLoading(true)
       if (pathId.product){
        fetch(`https://dummyjson.com/products/category/${pathId.product}`)
        .then(response=>response.json())
        .then(data=>{setProduct(data.products)})
        .finally(() => {setLoading(false)})
       }
    },[pathId.product]) 
       console.log(productArray)
   return(
   <ProductsList productsList={productArray}/>
   )
}

