import React, { useState } from 'react'

const TernaryOperator = () => {
    const [ color, setColor] = useState(true);
  const  toggleButton = () => setColor((prev) => !prev);
  return (
    <>
    <h1 className='display-5 fw-normal mb-5' >Ternary Operator:-</h1>
    <button 
    onClick={toggleButton}
    style={{
        background: color? "yellow" : "Pink",
        color:"black",
        padding:"10px",
        border:"none",
        borderRadius:"5px"

    }}>
    button is { color ? "yellow": "Pink"}
    </button>
    <div style={{border:"1px solid red", height:"100px", width:"350px" , fontSize:"20px",  margin:"15px" }} >
        {color? "you have change color to yellow": "You have change color to pink"}
    </div>

    </>
  )
}

export default TernaryOperator