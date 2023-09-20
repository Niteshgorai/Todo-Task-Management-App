import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTask() {
  const { id } = useParams();
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/getTask/' + id)
      .then((result) => {
        console.log(result);
        setTask(result.data.task);
        setCompleted(result.data.completed);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateTask/${id}`, { task, completed })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex vh-60 justify-content-center align-item-center'>
      <div className='w-50 h-0 text-bg-info mb-3 rounded p-3'>
        <form onSubmit={Update}>
          <h2>Update Task</h2>
          <div className='mb-2'>
            <label htmlFor=''>Task</label>
            <input
              type='text'
              placeholder='Enter Task'
              className='form-control'
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Task Completed Or Not</label>
            <input
              type='checkbox'
              checked={completed} 
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;