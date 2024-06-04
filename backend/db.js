/*
 * ToDo{
    title:string
    description:string
    completed:boolean
 }
*/

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhinayaman94:14Kitkat54%40@cluster0.9dmlilp.mongodb.net/toDos"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
