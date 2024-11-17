import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex-grow-0 h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5  '>
      <div className='min-h-[85%]'>
    <div className='flex justify-between'>
      <h3 className='bg-red-400 px-3 py-1  rounded'>
       {data.task_category}
      </h3>
      <h4> {data.task_date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold '>
    {data.task_title}
    </h2>
    <p className='text-sm mt-2'>
    {data.task_description}
    </p></div>
    <div className='flex justify-between mt-4 '>
        <button className='bg-green-500 py-1 px-2 text-[9px] rounded-xl'>
            MARKS AS COMPLETED
        </button>
        <button className='bg-red-500 py-1 px-2 text-[9px] rounded-xl'>
            MARKS AS FAILED
        </button>
    </div>

</div> 
  )
}

export default AcceptTask