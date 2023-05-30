import React, { useState } from 'react'
import { useRef } from 'react'

const DemoUseRef = () => {

  let inputRef = useRef(null)
  const  handleInput = () => {
  console.warn("function called")
  // inputRef.current.value = "1000"
  inputRef.current.focus()
  inputRef.current.style.color ="red"
  // inputRef.current.style.display="none" 
  }

  // another example
const [show, setShow] = useState(false);
const luckyName = useRef(null)

 const submitForm = (e) =>{
  e.preventDefault()
  console.log(luckyName.current.value);
const name = luckyName.current.value
name === "" ? alert("plz fill data"): setShow(true)
 }
  return (
    <>
   <h1> Demo UseRef</h1>
    <input type="text"  ref={inputRef} />
    <button onClick={handleInput}>Click me</button>

{/* Uncontrolled Component */}

    <h1>Another example</h1>
    <form action="" onSubmit={submitForm}>
    <h2>Form:-</h2>
    <label htmlFor="luckyName">Enter Your luckyName</label>
    <input type="text"  id='luckyName' ref={luckyName} />
    <button className='btn btn-primary'>Submit</button>
    </form>
    <p>{show ? `your lucky name is ${luckyName.current.value}`: "" }</p>
   

    </>
  )
}

export default DemoUseRef