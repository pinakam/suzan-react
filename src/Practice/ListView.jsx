import React from 'react'
import { List } from '../json/ListData'

const ListView = () => {
    const myData = (dataid, data=0) =>{

        const Result = List.filter((i => i.parent === dataid ));

        return Result.map((item) =>(
         <div style={{marginLeft:`${data * 15}px`}}>
         <p>{item.name}</p>
         {myData(item.id, data + 1)}
         </div> 
        ))


    }
  return (
    <>
    <div className="container mt-5">
    {/* the data of list comes from json */}
    <h2>List View</h2>
    <div className='mt-5'>
    {myData(0)}
    </div>
    </div>
    
    
    </>
  )
}

export default ListView