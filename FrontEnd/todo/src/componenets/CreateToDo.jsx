import { useState } from "react"

export function CreateToDo()
{

  const[title,settitle] = useState("");
  const[description,setdescription] = useState("");

  return <div>
   <input style={{padding:10,margin:10}} type="text" placeholder="title" onChange={function(e)
   {
    const value = e.target.value;
    settitle(value);
   }}/> <br/> <br/>
   <input style={{padding:10,margin:10}} type="text" placeholder="description" onChange={function(e)
   {
    const value = e.target.value;
    setdescription(value);
   }} /><br/><br/>

   <button type="submit" onClick={()=>
  {
    fetch(" http://localhost:3000/todo",
    {
      method:"POST",
      body:JSON.stringify({
        title:title,
        description:description
      }),
      headers:{
        "Content-Type": "application/json"
      }
    }
  ).then(async function(res)
{
  const json = await res.json();
  alert("ToDo Addes");

})
  }}>Add ToDo</button>
  </div>
}

