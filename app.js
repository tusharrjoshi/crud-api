const express = require('express');
const app = express();

const mongoose = require('./database/mongoose')

// app.listen(3000, function(){
//     console.log("Hello Server I'm listining @3000 PORT")
// })

// another way to write function , arrow func

app.listen(3100, ()=>{
    console.log("Hello server is listning @PORT 3000")
})