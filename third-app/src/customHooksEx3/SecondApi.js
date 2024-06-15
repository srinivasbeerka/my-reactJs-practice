import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

// const Url="https://jsonplaceholder.typicode.com/users"; 


const SecondApi = () => {

    const[data,loading,isError]=useFetch();

    if(loading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>Error Occured</h1>
    }


    // const[usersData,setUserData]=useState([]);
    
    // const fetchSecondApi= async (fetchApi)=>{
    //     const response=await fetch(fetchApi)
    //     const Users=await response.json()
    //     setUserData(usersData);
    // }

    // useEffect(()=>{
    //    fetchSecondApi(Url);
    // },[])

    
  return (
    <div>
        <ul>
            {
                data.map((eachObj)=>{
                     const{id,name,username}=eachObj;

                    return(
                        <li key={id}>
                            <h1>{name}</h1>
                            <h1>{username}</h1>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SecondApi