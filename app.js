const express = require('express');
const app = express();

const mongoose = require('./database/mongoose')

const Tasklist = require('./database/models/taskList')
const Task = require('./database/models/task')


// app.listen(3000, function(){
//     console.log("Hello Server I'm listining @3000 PORT")
// })

// another way to write function , arrow func

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT ,PATCH , DELETE');

    res.setHeader('Access-Control-Allow-Headers','Origin', 'X-Requested-With, Content-Type, Accept');
    next();
})

app.use(express.json()); // third party body parser

app.get('/tasklists', (req,res)=>{
    Tasklist.find({})
    .then((lists)=>{res.send(lists)})
    .catch((error)=>{console.log(error)})
})

// Get a perticular task by its ID 

app.get('/tasklists/:tasklistID',(req, res)=>{
    let taskListID = req.params.tasklistID
    Tasklist.find({_id: taskListID })
    .then((tasklist)=>{
        res.status(201).send(tasklist)
    })
    .catch((error)=>{
        console.log(error)
    })
})

// To add a new task post method 

app.post('/tasklists',(req,res)=>{

    console.log(req.body)
    let tasklistObj = {
        'title': req.body.title,
        'name':req.body.name
    }
    Tasklist(tasklistObj).save()
    .then((tasklist)=>{
        res.status(201)
        res.send(tasklist)
    })
    .catch((error)=>{console.log(error)}) 
})

// Update the task Put method 
// Put is full update of object
app.put('/tasklists/:tasklistID',(req, res)=>{
    Tasklist.findOneAndUpdate({_id:req.params.tasklistID}, {$set :req.body})
    .then((tasklist)=>{
        res.status(201).send(tasklist)
    })
    .catch((error)=>{
        console.log(error)
    })
})

// Patch is partial update of object
app.patch('/tasklists/:tasklistID',(req, res)=>{
    Tasklist.findOneAndUpdate({_id:req.params.tasklistID}, {$set :req.body})
    .then((tasklist)=>{
        res.status(201).send(tasklist)
    })
    .catch((error)=>{
        console.log(error)
    })
})

// Delete object using Delete method 
app.delete('/tasklists/:tasklistID',(req, res)=>{
    Tasklist.findOneAndDelete({_id:req.params.tasklistID})
    .then((tasklist)=>{
        res.status(201).send(tasklist)
    })
    .catch((error)=>{
        console.log(error)
    })
})

// Server listening 
app.listen(3000, ()=>{
    console.log("Hello server is listning @PORT 3000")
})