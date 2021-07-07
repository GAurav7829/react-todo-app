import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks([...tasks, newTask]);
  }
  const deleteTask = (index) => {
    var duplicateArray = [...tasks];
    duplicateArray.splice(index, 1);
    setTasks(duplicateArray);
  }
  const taskList = tasks.map((task, index) => {
    return (<div className='row justify-content-center'>
      <div className='col-md-6 '>
        <h1>{index + 1}.{task}</h1>
      </div>
      <div className='col-md-1'>
        <button className="btn btn-danger" onClick={() => deleteTask(index)}>DELETE</button>
      </div>
    </div>);
  });
  return (
    <div className='row justify-content-center'>
      <h1 className='text-center'>React Todo List</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <input type='text' placeholder='taskname' className='form-control' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </div>
        <div className='col-md-1'>
          <button className='btn btn-success' onClick={addTask}>Add Task</button>
        </div>
      </div>

      {taskList}

    </div>
  );
}

export default App;
