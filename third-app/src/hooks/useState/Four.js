import React from 'react'
import { useState } from 'react'

export const Four = () => {

  const arrayObj=[
    {
      id:1,
      firstname:'gleen',
      lastname:'maxwell',
      age:34
    },

    {
      id:2,
      firstname:'dinesh',
      lastname:'karthik',
      age:38
    },

    {
      id:3,
      firstname:'rajat',
      lastname:'patidar',
      age:29
    }
  ]

       const[data,setData]=useState(arrayObj);

      const deletehandle=(comingId)=>{

        const filterData = data.filter((eachitem)=>{

          return eachitem.id !== comingId;

        })

        setData(filterData)

      }





  return (
    <div>

      <ul>
        {
          data.map((eachitem,index)=>{
               
            const{firstname,lastname,age,id}=eachitem;

            return(
        <li key={index}>
          <div>
            <h1>My firstname:{firstname}</h1>
          </div>
          <div>
            <h1>My lastname:{lastname}</h1>
          </div>
          <div>
            <h1>My age:{age}</h1>
          </div>
          <div>
            <button className='btn btn-danger' onClick={()=>deletehandle(id)}>Delete</button>
          </div>
        </li>
            )


          })
        }
        
      </ul>

      

    </div>
  )
}

export default Four;
