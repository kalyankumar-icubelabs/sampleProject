import {useEffect, useState} from 'react';
import Link from "next/link";
import {Flex,Stack,Image,Title,Text,Button} from "@mantine/core";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { cart } from '@/utilis/cart';

interface ProductType{
    id:number;
    title: string;
    thumbnail:string;
    description:string;
    discountPercentage:number;
    price:number;
    rating:number;
    brand:string;
    images:string[];   
}



function isProductWihslisted(product:any){
    let productsArray=localStorage.getItem("productsArray");
   if(productsArray!==null){
    for (let eachProduct of JSON.parse(productsArray)){
        if(eachProduct.id===product.id){
         return true
        }
    }
   }
   return false
}


const ProductCard=(props:any)=>{
    const {product}=props
    const[wishlisted,setWishlistStatus]=useState(isProductWihslisted(product))
  
    
    const onClickWishlistButton=(product:{})=>{
        setWishlistStatus(!wishlisted)
        let wishList=localStorage.getItem("productsArray")
        if(!wishlisted){
            let updatedWishlist=[...JSON.parse(wishList),product]
            localStorage.setItem("productsArray",JSON.stringify(updatedWishlist))
        }else{
         let updatedWishList=JSON.parse(wishList).filter((eachProduct:any)=>eachProduct.id!==product.id)
         localStorage.setItem("productsArray",JSON.stringify(updatedWishList))
        }
    }


      
    return(
        <Flex style={{display:"flex",margin:"30px"}} >
         <Image withPlaceholder src={product.thumbnail} alt={product.title} 
            height={200} width={300}/>
           <Stack style={{marginLeft:"10px"}}>
            <Flex>
            <Title order={6}> {product.title}</Title>
           <Button variant="default" 
             style={{border:"none",height:24,alignSelf:"center",outline:"none"}} onClick={()=>onClickWishlistButton(product)}>
              {wishlisted? <AiFillHeart style={{color:"red"}}/> : <AiOutlineHeart/>}
            </Button>
            </Flex>
            <Text>{product.brand}</Text>
            <Text>Description: {product.description}</Text>
            <Text>Price {product.price}</Text>
            <Text>Discount {product.discountPercentage}%</Text>
            <Text>Sale Price {product.price-(product.discountPercentage/100)*product.price}</Text>
            <Text>Rating: {product.rating}</Text>
            <Button onClick={()=>console.log(product)}>Add To Cart</Button>
           </Stack>
        </Flex>
    )
}

export default ProductCard