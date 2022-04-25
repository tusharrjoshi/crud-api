const mongoose = require('mongoose');
const TaskListSchema = new mongoose.Schema({
    title: {
        type: String,
        trim:true,
        minlength:3

    },
    name: {
        type: String,
        trim:true,
        minlength:3

    }
})

const Tasklist = mongoose.model('Tasklist', TaskListSchema);

module.exports = Tasklist;