import React, { useState } from 'react'
import { useEffect } from 'react'


const Dependency = () => {

    const [pageWidth,setPageWidth]=useState(window.innerWidth)
    

    useEffect(()=>{
       const resizeHandler= window.addEventListener('resize',()=>{
            setPageWidth(window.innerWidth)
        })
        console.log("Hello world")

        // return()=>{
        //     console.log('i am removing')
        //     window.removeEventListener('resize',resizeHandler)
        // }
    })  

  return (
    <div>
        <h1>Hello this is useEffect Dependencies in another way</h1>
        <h1>{pageWidth}</h1>
        <button>Click me!</button>
    </div>
  )
}


export default Dependency;