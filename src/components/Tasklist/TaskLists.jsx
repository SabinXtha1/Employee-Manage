import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskLists = ({data}) => {
  
  console.log(data.task[0].active);
  
  return (
     <>
        <div id='tasklist' className='flex overflow-x-auto gap-2'>
      
          {
            data.task.map((e,i)=>{
              
              const taskComponents = [];
              
              if (e.active) {
                taskComponents.push(<AcceptTask key={`${i}-active`} data={e} />);
            }
            if (e.new_task) {
              taskComponents.push(<NewTask key={`${i}-new`} data={e} />);
            }
            if (e.complete) {
              taskComponents.push(<CompleteTask key={`${i}-complete`}  data={e}/>);
            }
            if (e.failed) {
              taskComponents.push(<FailedTask key={`${i}-failed`} data={e}/>);
            }
            
            return <div id='tasklist' className='h-[240px] flex gap-4  md:h-[] mt-10 lg:h-[50%] 'key={i}>{taskComponents}</div>;
            // if(e.active){
            //   return <AcceptTask key={i} />
            // }
            // if(e.new_task){
            //   return <NewTask key={i} />
            // }
            // if(e.complete){
            //   return <CompleteTask key={i}/>
            // }
            // if(e.failed){
            //   return <FailedTask key={i}/>
            // }
            })
          }
      
{/* <AcceptTask/>
 <NewTask/>
 <CompleteTask/>
 <FailedTask/> */}

 </div>
     
     </> 
  
  )
}

export default TaskLists