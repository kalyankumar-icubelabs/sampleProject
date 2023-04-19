import React from "react";


interface SearchContext {
    searchValue: string
    changeSearchValue: (event:any)=>void
  }
  
  const SearchContext = React.createContext<SearchContext>({
    searchValue: "",
    changeSearchValue: ()=>{}
  })

  export default SearchContext