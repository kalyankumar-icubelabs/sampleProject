import {useEffect,useState} from "react";

import { Paper,Title } from "@mantine/core";

import ProductList from "@/components/ProductsList"

export default function Wishlist(){
   const[wishList,setWishList]=useState([])
    
   const emptyWishlist=()=>{
      return(
         <Title order={1} style={{margin:"auto",textAlign:"center"}}>Add products to Wishlist</Title>
      )
   }
   
   useEffect(()=>{
      let wishList=localStorage.getItem("productsArray")
      setWishList(JSON.parse(wishList))
   },[])
   

   return(
   <Paper style={{height:"100vh",marginTop:"100px",width:"100%"}}>
      { wishList.length===0? emptyWishlist() : 
      <>
      <Title style={{textAlign:"center"}} order={1}>Wishlist</Title>
      <ProductList productsList={wishList}/>
      </>}
   </Paper>
   )
}