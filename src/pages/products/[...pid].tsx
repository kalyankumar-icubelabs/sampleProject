import { useRouter } from "next/router";
import {useEffect,useState} from 'react';
import{Container} from "@mantine/core"
import ProductCard from "@/components/ProductCard"
export default function ProductPage(){
    const [product,setProduct]=useState("")
    const[loading,setLoading]=useState(true)
    const router=useRouter()
    const pathId=router.query
     console.log(pathId)
    useEffect(()=>{
        setLoading(true)
       if (pathId.pid){
        fetch(`https://dummyjson.com/products/${pathId.pid}`)
        .then(response=>response.json())
        .then(data=>{ setProduct(data)})
        .finally(() => {setLoading(false)})
       }
    },[pathId.pid])
    
    return (
        <Container  sx={{marginTop:"100px",width:"80%",}}>
            {loading?  <h1>loading</h1>: <ProductCard product={product}/>}
        </Container>
    )
}

