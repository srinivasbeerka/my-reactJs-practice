import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    
    const[number,setnumber]=useState(0);
    const[dark,setDark]=useState('');
    const doubleNumber=useMemo(()=>{
        return slowFunction(number);
    },[number])
    

    const themeChange=useMemo(()=>{
        return {
            backgroundColor:dark ? 'black' :'white' ,
            color:dark ? 'white': 'black'       
        }
    },[dark])

    useEffect(()=>{
        console.log("theme changed");
    },[themeChange])

  return (
    <div>
        <input type='number' id='number' value={number} onChange={(e)=>{setnumber(e.target.value)}} />
        <br/><br/>
        <div>
            <button onClick={()=>{setDark(!dark)}}>Change theme</button>
        </div>
        <h1 style={themeChange}>the number:{doubleNumber}</h1>
    </div>
  )
}

const slowFunction=(number)=>{
  for(let index=0; index<100000000;index++){}
    console.log("slow function is running");
   return number*2;
}

export default UseMemo