import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-grow-0 h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5'>
       <div className='min-h-[85%]'>

    <div className='flex justify-between'>
      <h3 className='bg-red-400 px-3 py-1  rounded'>
      {data.task_category}
      </h3>
      <h4>{data.task_date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold '>
    {data.task_title}
    </h2>
    <p className='text-sm mt-2'>
    {data.task_description}
    </p>
       </div>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 w-full rounded-xl  '>
         ACCEPT TASK
        </button>
        
    </div>

</div> 
  )
}

export default NewTask