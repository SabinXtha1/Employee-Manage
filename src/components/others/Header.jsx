import React, { useState } from 'react'

const Header = ({data,setUser}) => {
  
  

  

  const logOut =()=>{
  localStorage.setItem('loggedInuser','')
  // window.location.reload()
  console.log(setUser);
     setUser('')
  
  }
  return (
    <>
       <div className='flex items-end justify-between p-4'>
        <h1>
            Hello <br/>
        <span className='text-3xl font-semibold'>
        
          👋🏻
        </span>
        </h1>
        <button className='bg-red-700 p-2 rounded-[35px] hover:bg-red-500 px-4' onClick={logOut}>
            Log Out
        </button>
       </div>
    </>
  )
}

export default Header