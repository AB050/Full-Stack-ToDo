const zod = require("zod");
const createtoDo = zod.object({
  title: zod.string(),
  description: zod.string(),
});
const updateTodo = zod.object({
  _id: zod.string(),
});

module.exports = {
  createtoDo: createtoDo,
  updateTodo: updateTodo,
};
