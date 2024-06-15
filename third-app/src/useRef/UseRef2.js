import React, { useRef, useState } from 'react'

const UseRef2 = () => {

    const[firstname,setfirstname]=useState("");

    const inputDom=useRef('');

    const focus=()=>{
        inputDom.current.focus()
    }




  return (
    <div>
        <input ref={inputDom} type='text' id='search' name='search' onChange={(e)=>{setfirstname(e.target.value)}}/>
        <h1>typing:{firstname}</h1>
        <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef2