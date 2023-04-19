import {useState,useContext} from "react";
import { useRouter } from "next/router";
import {Flex} from '@mantine/core';
import { AiOutlineSearch } from "react-icons/ai";
import SearchContext from "../UserContext"


const Search=()=>{
    const [searchResult,setSearchResult]=useState("")
    const searchContext=useContext(SearchContext)
    const{searchValue,changeSearchValue}=searchContext
    const route=useRouter()
    const onClickSearch=()=>{        
        route.push(`/products/search?q=${searchValue}`)
    }
    
    return(
        <Flex style={{border:"1px grey solid",borderRadius:"5px",height:"26px"}}>
        <input type="text" placeholder='Search' 
         value={searchValue} 
         onChange={changeSearchValue}
         style={{border:"none",outline:"none"}}/>
        <AiOutlineSearch style={{alignSelf:"center",fontSize:"20px"}} onClick={onClickSearch}/>
        </Flex>
    )
}

export default Search