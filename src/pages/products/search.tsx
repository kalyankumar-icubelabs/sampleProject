import {useState,useEffect,useContext} from "react";
import ProductList from "@/components/ProductsList";
import { useRouter } from "next/router";
import { Center,Title } from "@mantine/core";

 const Search=()=>{
    const [productsData,setProductsData]=useState([])
    const route=useRouter()
    const {query}=route

    useEffect(()=>{
     fetch(`https://dummyjson.com/products/search?q=${query.q}`)
     .then(res=>res.json())
     .then(data=>setProductsData(data.products))
    },[query.q])
    console.log(productsData)
    return(
      productsData.length===0? 
      <Center style={{height:"100vh",width:"100vw"}}><Title order={1}>Invalid Search</Title></Center> : 
       <ProductList productsList={productsData}/>
    )
}

export default Search