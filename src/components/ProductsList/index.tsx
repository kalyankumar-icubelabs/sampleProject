import Link from "next/link";
import { List,
    Title,
    Text,
    Image,
    Stack,
    useMantineTheme} from "@mantine/core";

import { useMediaQuery } from '@mantine/hooks';


interface productType{
    id:number;
    title: string;
    thumbnail:string;
    description:string;
    discountPercentage:number;
    price:number;
    rating:number;
    brand:string;
}

function ProductList({productsList}:any){
    const theme=useMantineTheme()
  
    return(
       <Stack style={{margin:"80px",width:"100%"}}>
      <List listStyleType="none" 
        sx={{display:"flex",flexWrap:"wrap",width:"100%"} }>
        {productsList.map((product:any)=>
          <List.Item key={product.id} sx={{padding:"10px 5px"}}>
          <Link href={`/products/${product.id}`}
          style={{
            textDecoration:"none",
            color:theme.colors.dark[1]
          }}>
         <Image src={product.thumbnail} alt={product.title} fit={"initial"} width={200} height={150}/>
            <Title order={6}> {product.title}</Title>
            <Text>{product.brand}</Text>
            <Text>Price {product.price}</Text>
            <Text>Discount {product.discountPercentage}%</Text>
            <Text>Sale Price {product.price-(product.discountPercentage/100)*product.price}</Text>
            <Text>Rating: {product.rating}</Text>
        </Link>
           </List.Item>)}
      </List>
       </Stack>
    )
}

export default ProductList