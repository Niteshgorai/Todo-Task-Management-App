const express= require("express")
const mongoose= require("mongoose")
const cors=require('cors')
const Task =require('./models/task')

const app= express()
app.use(cors());
app.use(express.json())


mongoose.connect("mongodb+srv://Nitesh:nitesh123@stack-overflow-clone.4jj9el5.mongodb.net/Todo_App?retryWrites=true&w=majority")

app.get('/', (req, res) =>{
     Task.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getTask/:id', (req, res) => {
    const id=req.params.id;
    Task.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateTask/:id", (req, res) => {
    const id = req.params.id;
    const { task, completed } = req.body;
    
    Task.findByIdAndUpdate(id, { task, completed }, { new: true })
      .then(updatedTask => {
        if (!updatedTask) {
          return res.status(404).json({ error: 'Task not found' });
        }
        res.json(updatedTask);
      })
      .catch(err => res.status(500).json({ error: 'An error occurred while updating the task' }));
  });


app.delete('/deleteTask/:id', (req, res) =>{
    const id=req.params.id;
    Task.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createTask", (req, res)=>{
    Task.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running");
})