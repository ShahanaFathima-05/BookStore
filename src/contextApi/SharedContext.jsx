import React from 'react'
import { createContext,useState } from 'react'

export const SearchContext=createContext()

function SharedContext({children}) {
  
  const [search,setSearch]=useState('')

  return (
    <>
    <SearchContext.Provider value={{search,setSearch}}>
        {children}
    </SearchContext.Provider>
    </>
  )
}
    
export default SharedContext