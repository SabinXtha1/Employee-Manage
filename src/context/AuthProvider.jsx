import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import Alltask from '../components/others/Alltask'
export const AuthContext= createContext()


const AuthProvider = ({children}) => {
  
  const [userData, setuserData] = useState(null)
  useEffect(() => {
 
    setLocalStorage()
    const {employee} = getLocalStorage()
    setuserData(employee)
    console.log(userData);
    
  
    
  },[] )
  
  return (
    <AuthContext.Provider value={[userData,setuserData]}>

    <div>
        {children}
     
    </div>
    </AuthContext.Provider>
  )
}

export default AuthProvider