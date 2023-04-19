import Link from "next/link";

import {Flex,Stack,Image,Title,useMantineTheme} from "@mantine/core"

const Categories=(props:any)=>{
   const {categoriesList}=props 
   const theme=useMantineTheme()
    console.log(categoriesList);
    
  return(
<Flex  style={{margin:"100px 100px",display:"flex",flexWrap:"wrap"}}>
    {categoriesList.map((each:string)=>
      <Flex key={each} 
      direction="column"
      justify="center"
      align="center"
      wrap="wrap"
      style={{padding:10,margin:10}}>
      <Link href={`categories/${each}`}
      style={{
        textDecoration:"none",
        color:theme.colors.dark[1]
      }}>
      <Image src="" alt={each} withPlaceholder />
      <Title order={6} style={{textAlign:"center"}}>{each}</Title>
      </Link>
   </Flex>)}
 </Flex>
    
  )
}

export async function getStaticProps(){
   const res=await fetch("https://dummyjson.com/products/categories")
   const categoriesList=await res.json()
   return{
    props:{
      categoriesList
    }
   }
}

export default Categories