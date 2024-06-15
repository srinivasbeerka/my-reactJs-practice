import React, { useEffect } from 'react'
import { useReducer } from 'react'

const Url="https://jsonplaceholder.typicode.com/users";

const reducer=()=>{};

const UsereducerEx2 = () => {


    const initialState={
        userData:[],
        
    }

    const fetchUserData= async (apiUrl)=>{
          const response=await fetch(apiUrl)
          const data=await response.json();
          
    }

    useEffect(()=>{
          fetchUserData(Url)
          
    })

    const[state,Dispatch]=useReducer(reducer,initialState);

   

  return (
    <div>
        
    </div>
  )
}

export default UsereducerEx2