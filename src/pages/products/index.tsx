import {useState,useEffect} from "react"; 
import  ProductList  from "@/components/ProductsList";

import { List } from "@mantine/core";

function Products({products}:any){
    const productsList=(products.products)
 
    return(
       <ProductList productsList={productsList}/>
    )

}

export async function getStaticProps(){
    const res=await fetch("https://dummyjson.com/products")
    const products=await res.json()
    return{
        props:{
            products
        }
    }
}

export default Products