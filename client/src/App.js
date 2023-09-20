import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Taskss from './Components/FormTask';
import Task from './Components/CreateTask';
import UpdateTask from './Components/UpdateTask';

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Taskss />}></Route>
        <Route path="/create" element={<Task/>}></Route>
        <Route path="/update/:id" element={<UpdateTask/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
