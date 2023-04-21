import React from 'react'

const Box = (props) => {
    const {firstName, lastName, id} = props.PersonName;
  return (
 <>
 <div className='text-secondary'>
 <h4>Name: {firstName}</h4>
 <h4>Surname: {lastName}</h4>
 <h4>Id: {id}</h4>
 </div>
 </>
  )
}

export default Box