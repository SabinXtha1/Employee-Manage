import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import TaskLists from '../Tasklist/TaskLists'

const EmployeeDashBoard = ({data,setUser}) => {
 
  console.log(data);
  
  
  return (
    
   <>
      <div className='bg-[#1c1c1c] h-[100vh] p-4 md:h-screen lg:h-screen'>
     
      
           <Header data={data} user={setUser}/>
           <TaskList data={data} user={setUser}/>
           <TaskLists data={data} user={setUser}/>

      </div>
   </>
  )
}

export default EmployeeDashBoard