import React, { useState } from 'react'

const Reducemethod = () => {
    const Persons = ["Reena","prisha" , "Devi","Jamin", "Jane"];
  return (
    <>
    <h1 className='text-center'>Reduce method:-</h1>
    
    <ul>
      {/* Returns other than J starting Names */}
      {Persons
        .reduce((i, Developer) => {
          if (!Developer.startsWith("J")) {
            return i.concat(Developer);
          } else {
            return i;
          }
        }, [])
        .map((Developer) => (
          <li>{Developer}</li>
        ))}
    </ul>


    </>
  )
}

export default Reducemethod