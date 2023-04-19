import type { AppProps } from 'next/app'
import {useState} from 'react';
import { MantineProvider,Box,Flex,useMantineTheme} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import HeaderResponsive from "../components/HeaderResponsive"
import NavbarMinimalColored from "../components/SideNavigation"
import  {FooterSocial}  from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar"
import SearchContext from "../components/UserContext"
import { AiFillHome,AiFillHeart } from "react-icons/ai";

export default function App({ Component, pageProps }: AppProps) {
  const[searchValue,setSearchValue]=useState("")
  const theme=useMantineTheme()
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  const changeSearchValue=(event:any)=>{
    setSearchValue(event.target.value)
  }
 
  return (
  <SearchContext.Provider value={{searchValue,changeSearchValue}}>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'light',
      colors:{
        'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' ],
      }
    }}>
      <HeaderResponsive 
      links={[{link:"/",label:"Home",icon:<AiFillHome/>},
      {link:"/products",label:"Products"},
      {link:"/products/categories",label:"Categories"}]} 
      />
      <Flex style={{display:"flex"}}>
     {matches && <NavbarMinimalColored/>}
      <Component {...pageProps} />
      </Flex>
      <FooterSocial/>
    { !matches && <MobileNavbar links={[
      {link:"/",label:"Home",icon:<AiFillHome/>},
      {link:"/products",label:"Products"},
      {link:"/wishlist",label:"Wishlist",icon:<AiFillHeart/>}]}/>}
    </MantineProvider>
  </SearchContext.Provider>

  )
}
