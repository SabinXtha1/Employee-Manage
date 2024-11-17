import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import Alltask from '../others/Alltask'

const AdminDashboard = ({data , setUser}) => {
  console.log(data);
  
  return (
   <>
   <div className='h-screen w-full p-10'>

      <Header data={data} setUser={setUser}/>
     <CreateTask/>
     
     <Alltask data={data} setUser={setUser}/>    
     
    
   </div>

   </>
  )
}

export default AdminDashboard