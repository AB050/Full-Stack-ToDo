const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhinayaman94:Figm6QLs3hlarryg@cluster0.pyiyahu.mongodb.net/toDos"
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
