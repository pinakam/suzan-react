import React, { useState } from "react";

const Demo = () => {
    
    //   how to get object  's key and values  without json.stringify
    
const [array, setArray] = useState(
    {name:"",
    surname:""
    }
)

const setForm =()=>{
    setArray(
       {
   name:"suzan",
   suraname:"lakhani"
       }
    )
       
}
const initialValue = {
   name: "suzan"
  
  }
  const [ name, setName] = useState(initialValue)
const updateName = () =>{
   setName({name: "suzan lakhani"})
}

  return (
    <>
      <h1>Demo</h1>
      <button onClick={setForm}>
        demo click
      </button>
    <div>
    {/* Object.entries is a javascript function used to get value from itself object  */}
    {Object.entries(array).map((([key,value]) =>(
          
          <p key={key}>{key}:{value}</p> 
    )))
       };
   
    </div>
{/* second one */}
    <h1>second Demo</h1>
       <div>{JSON.stringify(name)}</div>
    <button onClick={updateName}>Click</button>
   
   
    
    </>
  );
};

export default Demo;
