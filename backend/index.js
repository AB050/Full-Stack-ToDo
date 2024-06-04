const express = require("express");
const app = express();
const { createtoDo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());

// POST /todo
app.post("/todo", async (req, res) => {
  const createPayload = req.body; // Changed res.body to req.body
  const parsedPayload = createtoDo.safeParse(createPayload); // Ensure you're using createtoDo for parsing
  if (!parsedPayload.success) {
    // Fixed typo from sucess to success
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  //put in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "ToDo Created",
  });
});

// GET /todos
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  console.log(todos);
  res.json(todos); // Added response handling
});

// PUT /completed
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload); // Ensure you're using updateTodo for parsing
  if (!parsedPayload.success) {
    // Fixed typo from sucess to success
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  await todo.update({ _id: req.body._id }, { completed: true });

  res.json({
    msg: "ToDo marked as updated",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
