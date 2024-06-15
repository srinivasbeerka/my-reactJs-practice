import React, { useEffect, useRef, useState } from 'react'



const UseRef = () => {

    const [firstname,setfirstname]=useState('');
    // const [count,setCount]=useState(0);  //  
    const  renderCount= useRef(1);    //to overcome from infinate loop ,then we use useRef

    useEffect(()=>{
      //  setCount(count+1)
       renderCount.current=renderCount.current+1
    })

  return (
    <div>
        <input type='text' id="search" name='search' onChange={(e)=>{setfirstname(e.target.value)}}/>
        <h1>typing:{firstname}</h1>
        <h1>component render count {renderCount.current} times</h1>
    </div>
  )
}

export default UseRef