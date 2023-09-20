import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Task = () => {
const navigate =useNavigate();
const [task, setTask]= useState()
const [isChecked, setIsChecked] = useState(false);
const handleOnChange = () => {
  setIsChecked(!isChecked);
};

const Submit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:3001/createTask", {task, isChecked})
  .then(result => {
    console.log(result)
    navigate('/')
    })
  .catch(err => console.log(err))
}

  return (
    <div className='d-flex vh-60 justify-content-center align-item-center'>
      <div className='w-50 h-0 text-bg-info mb-3 rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add Task</h2>
          <div className='mb-2'>
            <label htmlFor=''>Task Name</label>
            <input type='text' placeholder='Enter Name' className='form-control' onChange={(e) => setTask(e.target.value)}></input>
          </div>
          <div className='mb-2'>
            <input
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
        checked={isChecked}
        onChange={handleOnChange}
      />
        <div className="result">
       Above checkbox is {isChecked ? "checked" : "un-checked"}.
    </div>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
      </div>
  )
}
export default Task