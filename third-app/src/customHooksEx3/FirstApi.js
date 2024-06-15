import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';


// const Url="https://jsonplaceholder.typicode.com/users"; 

const FirstApi = () => {

    const[data,loading,isError]=useFetch();  //this is our own custom hook 

//    const[data,setData]= useState([]);

//    const fetchFirstApi= async (fetchApi)=>{
//         const response=await fetch(fetchApi);
//         const usersData=await response.json();
//         setData(usersData)
//    }

//    useEffect(()=>{
//      fetchFirstApi(Url);
//    },[])





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

export default FirstApi