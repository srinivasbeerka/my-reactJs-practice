import React, { useState } from 'react'
import UseCounter from './UseCounter'

const FirstCounter = () => {

    // const [count,setCount]=useState(0);

    // const increment=()=>{
    //     setCount(count+1)
    // }

    // const decrement=()=>{
    //     setCount(count-1)
    // }

    // const reset=()=>{
    //     setCount(0)
    // }

    const[count,increment,decrement,reset]=UseCounter();

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default FirstCounter