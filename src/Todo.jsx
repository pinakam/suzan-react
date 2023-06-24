import React, { useEffect, useState } from "react";
import "../src/assets/css/todo.css";
const Todo = () => {
  const getLocalItimes = () => {
    let Lists = localStorage.getItem("list")
    
    if(Lists){
      return JSON.parse(localStorage.getItem("list")) 
    }
    else{
      return [];
    }
  }
  const [inputData, setInputData] = useState("");
  const [todolist, setTodolist] = useState(getLocalItimes());


  const handleDelete = (index) => {
    const deleteid = todolist.filter((todo,i) => i !== index)
    alert("Deleted Item")
    setTodolist(deleteid)
   
  };

  const handleAdd = () => {
    if (inputData.trim() !== "") {
      setTodolist([...todolist, inputData]); 
      setInputData("");
      localStorage.setItem("list",JSON.stringify(todolist))
    }
  };
  
  useEffect(() => {
localStorage.setItem("list",JSON.stringify(todolist))
  }, [todolist])
  
  return (
    <>
      <div className="container mt-5">
        <h6 className="mb-3">Add your List Here...</h6>
        <div className="input-div">
          <input
            type="text"
            placeholder="✍️  Add items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="input-css"
          />
          <i className="fa-regular fa-plus" onClick={handleAdd}></i>
        </div>
        <div>
          
            {todolist &&
              todolist.map((e, index) => (
                <>
                <span className="eachItem">
                  <span key={index}>
                    {" "}
                    <h3>{e}</h3>
                  </span>
                  <i
                    className="fa-solid fa-trash-can icon-del"
                    onClick={()=>handleDelete(index)}
                  ></i>
                  </span>
                </>
              ))}
        
        </div>
      </div>

     
    </>
  );
};

export default Todo;
