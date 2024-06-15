import React, { useEffect, useState } from 'react'
import UsePageTitle from './UsePageTitle';

const PageTitleTwo = () => {

    const [count,setCount]=useState(0);

    // useEffect(()=>{
    //     document.title=`count-${count}`;    //Two Overcome from using multiple code we can use we can use custom hooks by creating function by our own 
    // },[count])
    
    UsePageTitle(count);  //its is custom function  which need a parameter to pass 

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Count:{count}</button>
    </div>
  )
}

export default PageTitleTwo