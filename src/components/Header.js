import React, { useState } from 'react';

const Header = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    if (task.trim() === "") {
        return;
    }
    else{
      e.preventDefault();

      let newTask = task;
      setTaskList((taskList) => [...taskList, newTask]);
      console.log(taskList);

      setTask("");
    }
  }

  function deleteTask(index){
    const updateTasks = [...taskList];
    updateTasks.splice(index,1);
    setTaskList(updateTasks);

  }

  return (
    <div className='container'>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Add a task...'
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.length === 0
          ? ""
          : taskList.map((taskName, index) => (
              <li key={index} className='listItem' id={index}>
                {taskName} 
                <button onClick={()=>{deleteTask(index)}}>Delete</button>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Header;
