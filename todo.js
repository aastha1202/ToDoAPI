const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  time: {
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
    
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
