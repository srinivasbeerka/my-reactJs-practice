import { useState } from "react";


const Two=()=>{

    //

    const [count,setCount]= useState(0);  //syntax for new state   in Hooks

    const incrementCount=()=>{
        setCount(count +1)

        // setCount((prevCount)=>{
        //     return prevCount+1
        // })
        // setCount((prevCount)=>{
        //     return prevCount+1
        // })
    }

    const decrementCount=()=>{
        setCount(count -1)
    }




    return(
        <div className="container-fluid  m-5">

            <button className="btn btn-danger" onClick={decrementCount} >-</button>
            <span className="m-1">{count}</span>
            <button className="btn btn-success" onClick={incrementCount}>+</button>
        </div>
    )


}


export default Two;