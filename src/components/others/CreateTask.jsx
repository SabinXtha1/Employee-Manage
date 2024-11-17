import { useContext } from 'react';
import React, { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {
  const [userData,setuserData] = useContext(AuthContext)
  const [newTask, setNewTask] = useState({
    task_title: '',
    date: '',
    assignedTo: '',
    task_category: '',
    task_description: '',active:false,new_task:true,failed:false,complete:false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [id]: value,
    }));
    console.log(e.target.value);

    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Task created:', newTask);
    const data = userData
       console.log(data);
       
       
       
       data.forEach((e)=>{
         if(newTask.assignedTo.toUpperCase()==e.firstName.toUpperCase()){
          e.task.push(newTask)
          e.taskCounts.new_task=e.taskCounts.new_task+1
          console.log(e);
          
                 console.log('yehihey');
                 
         }
        //  localStorage.setItem('employee',JSON.stringify(data))
      setuserData(data)
      console.log(data);
      
        
       })
    
    setNewTask({ task_title: '', task_date: '', assignedTo: '', task_category: '', task_description: '' }); // Clear inputs after submission
  };

  return (
    <form
      className="flex mt-7 w-full bg-gray-900 p-3 rounded"
      onSubmit={submitHandler}
    >
      <div className="w-1/2 p-3">
        <div className="flex flex-col justify-between">
          <h3>Task Title</h3>
          <input
            className="text-black w-full p-1 rounded mb-3"
            type="text"
            placeholder="Make a UI Design"
            id="task_title"
            value={newTask.task_title}
            onChange={handleChange}
          />
        </div>

        <div>
          <h3>Date</h3>
          <input
            className="text-black w-full p-1 rounded mb-3"
            type="date"
            id="task_date"
            value={newTask.task_date}
            onChange={handleChange}
          />
        </div>

        <div>
          <h3>Assign To</h3>
          <input
            className="text-black w-full p-1 rounded mb-3"
            type="text"
            placeholder="Employee Name"
            id="assignedTo"
            value={newTask.assignedTo}
            onChange={handleChange}
          />
        </div>

        <div>
          <h3>Category</h3>
          <input
            className="text-black w-full p-1 rounded mb-3"
            type="text"
            placeholder="Design, Dev, etc."
            id="task_category"
            value={newTask.task_category}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-1/2 p-3 flex flex-col items-center">
        <h3>Description</h3>
        <textarea
          className="text-black w-full h-[80%] p-1 rounded"
          placeholder="Task description"
          id="task_description"
          value={newTask.task_description}
          onChange={handleChange}
        />
        <button
          className="mt-3 bg-violet-600 px-4 py-1 rounded hover:bg-violet-900"
          type="submit"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
