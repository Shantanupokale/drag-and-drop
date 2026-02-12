// dndbox.jsx
import React, { useState } from 'react'

const intialstate ={
    Todo: ["read book","write code","drink water","fix merge requests"],
    InProgress:["working on dnd project", "learning nodejs"],
    Completed:["js course lectures","setting-up project"],
};

const DndBox = () => {
  const[data,newData] = useState(intialstate);


  return (
    
    <div>
        {Object.keys(data).map((todos) => {
            return (
                <div className='flex flex-col bg-green'>
                    
                        {todos}
                        
                    {data[todos].map((item,idx) => {
                        return <div key={idx}>{item}</div>
                    })}

                    
                </div>
            )
        } )}
    </div>
  )
}

export default DndBox
