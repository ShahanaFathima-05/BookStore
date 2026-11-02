import React from 'react'
import { createContext } from 'react'
import { useState,useEffect } from 'react'

export const authContext=createContext()

function AuthContext({ children }) {
    
    const [role, setRole] = useState('')
    const [authUser,setAuthUser]=useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        const userRole = sessionStorage.getItem('role') 
        if (token && userRole) {
            setAuthUser(true)
            setRole(userRole)
        }
    }, [])

  return (
    <>
    <authContext.Provider value={{ authUser, setAuthUser, role, setRole }}>
      {children}
    </authContext.Provider>
    </>
  )
}

export default AuthContext