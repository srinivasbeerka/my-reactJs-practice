import React, { useEffect, useState } from 'react'
import UsePageTitle from './UsePageTitle';

const PageTitleOne = () => {
    const [count,setCount]=useState(0);

    // useEffect(()=>{
    //     document.title=`count-${count}`;
    // },[count])

    UsePageTitle(count);

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Count:{count}</button>
    </div>
  )
}

export default PageTitleOne