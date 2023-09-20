import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

 function Taskss  ()  {
  const [tasks, setTasks] = useState([])
  // const [completed, setCompleted]= useState(Boolean)
const history= useHistory
  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setTasks(result.data))
    .catch(err => console.log(err))
  },[])

const handleDelete = (id) => {
  axios.delete('http://localhost:3001/deleteTask/'+id)
  .then(res => {console.log(res)
    history.reload(true)
  })
  .catch(err => console.log(err))
}

  return (
    <div className='d-flex  vh-60  justify-content-center '>
      <div className='w-50 text-bg-info mb-3 rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>TaskCompletedOrNot</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((user)=>{
                return<tr>
                  <td>{user.task}</td>
                  <td>
                  <input type="checkbox" checked={user.completed} readOnly />
                </td>
                  <td>
                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                  <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>

      </div>
      </div>
  )
}
export default Taskss;
