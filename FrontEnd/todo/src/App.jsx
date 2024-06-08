import { useState } from 'react';
import './App.css'
import {CreateToDo} from "./componenets/CreateToDo.jsx"
import Todos from './componenets/Todos.jsx';

function App() {

  const [todos,setTodos] = useState([]);
  fetch(" http://localhost:3000/todos").then(async function(res){
  const json = await res.json();
  setTodos(json.todos);
})

  return (
    <>
      <div>
       <CreateToDo/>
       <Todos props = {todos}>
       </Todos>
      </div>
    </>
  )
}

export default App
