import React, { useEffect, useState } from 'react'

export const Twelve = () => {

    const [count,SetCount]=useState(0);  //when ever usestate executed automatically useEffect will render
    const [toggle,setToggle]=useState(true);

    useEffect(()=>{
        console.log("Hello world")
    },[count,toggle])    //in array we can store the dependencies  //when ever empty dependencies are given it won't execute the use Effect



  return (
    <div>
        <h1>Hello this is useEffect Dependencies</h1>
        <h1 className='btn btn-success' onClick={()=>{setToggle(!toggle)}}>{toggle ? 'open':'close '}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            SetCount(count +1)
        }}>Click me!</button>
    </div>
  )
}
