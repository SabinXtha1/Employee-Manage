import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider';
const Alltask = ({sata}) => {
   
    const [userData,setuserData] = useContext(AuthContext)
    // const authData= JSON.parse(localStorage.getItem('employee'))
//    console.log(authData);
   
   
   
    
    
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 overflow-auto h-44 rounded  ' id='tasklist'>
        <div className='flex justify-between w-full bg-yellow-700 p-1 rounded'>
            <span className='w-[20%] text-center'>
             Employee Name
            </span>  <span className='w-[20%] text-center'>
                New Task
            </span>  <span className='w-[20%]  text-center'>
                Active
            </span>  <span className='w-[20%]  text-center'>
                Complete
            </span>
            <span className='w-[20%]  text-center'>
                Failed
            </span>
        </div>
        <div>
{
    userData.map((e,i)=>{
          
            
    return    <div className='bg-tranparent border-yellow-500 border py-2 mt-1 px-4 flex justify-between rounded' key={i}>
    
            <span className='w-[20%] text-center'>
            {e.firstName}
            </span>  
            <span className='w-[20%] text-center'>
            {e.taskCounts.new_task}
            </span>  <span className='w-[20%]  text-center'>
             {e.taskCounts.active}
            </span>  <span className='w-[20%]  text-center'>
            {e.taskCounts.complete}
            </span>  <span className='w-[20%]  text-center'>
            {e.taskCounts.failed}
            </span>
        </div>
    })
}
        </div>

    </div>
  )
}

export default Alltask