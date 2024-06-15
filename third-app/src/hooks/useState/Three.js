import React, { useState } from 'react'

export const Three = () => {

   const cricketers={
      firstname:"Srinivas",
      lastname:"Beerka",
      age:22
   }



     const [data,setData]=useState(cricketers);   //storing cricketers onject into the data

     const changefirstName=()=>{
        setData({
            ...data,   //spread operator
            firstname:"virat"
            
        })
   }

       const changeLastName=()=>{

               setData({
                ...data,
                lastname:"kohli"
                })
            }
       const changeAge=()=>{
            setData({
            ...data,
                age:34
            })
                }

                // const {firstname,lastname,age}=data;  //desturucturing
                

  return (
    <div>
           <h1>first Name :{data.firstname}</h1>
           <button className='btn btn-primary' onClick={changefirstName}>change firstname</button>
           <h1>Last Name:{data.lastname}</h1>
           <button className='btn btn-primary'  onClick={changeLastName}>Change lastname</button>
           <h1>Age:{data.age}</h1>
           <button className='btn btn-primary'  onClick={changeAge}>Change age</button>
    </div>
  )
}
