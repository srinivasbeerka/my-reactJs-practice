import React, { useEffect, useState } from 'react'

  const Eleven = () => {

    const[count,setCount]=useState(0);


   useEffect(()=>{
    console.log("hello am use effect",count)
   })






  return (
    <div>
        <h1>hello useEffect</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count +1)
        }}>+</button>
    </div>
  )
}

export default Eleven;
