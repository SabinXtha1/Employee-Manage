import React from 'react'

const TaskList = ({data}) => {
   console.log(data);
   
  return (
    <div className='
    screen justify-between items-center gap-5 mt-10 ml-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2'>
        <div className=" rounded-xl py-5  bg-red-500">
         
     <h2  className='text-3xl font-semibold text-center '>
        {data.taskCounts.new_task}

     </h2>
     <h2 className='text-3xl font-semibold text-center '>
        New Task
     </h2>
        </div>
        <div className=" rounded-xl py-5 bg-blue-500">
     <h2  className='text-3xl font-semibold text-center '>
     {data.taskCounts.active}

     </h2>
     <h2 className='text-3xl font-semibold text-center '>
        Active Task
     </h2>
        </div>
        <div className=" rounded-xl py-5  bg-yellow-500">
     <h2  className='text-3xl font-semibold text-center '>
     {data.taskCounts.complete}

     </h2>
     <h2 className='text-3xl font-semibold text-center '>
        Completed Task
     </h2>
        </div>
        <div className=" rounded-xl py-5  bg-green-500">
     <h2  className='text-3xl font-semibold text-center '>
     {data.taskCounts.failed}

     </h2>
     <h2 className='text-3xl font-semibold text-center '>
        Failed Task
     </h2>
        </div>
    </div>
  )
}

export default TaskList