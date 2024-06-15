import React, { useEffect, useState } from 'react'

const Url="https://jsonplaceholder.typicode.com/users"; 


const useFetch = () => {           //this is custom hook created by us
 
    const[data,setData]= useState([]);
    const[loading,setLoading]=useState(false);
    const[isError,setIsError]=useState(false);

   const fetchFirstApi= async (fetchApi)=>{
        setLoading(true);
        setIsError(false);
        try {
            const response=await fetch(fetchApi);
            const usersData=await response.json();
            setData(usersData)

            setLoading(false)
            
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
   }

   useEffect(()=>{
     fetchFirstApi(Url);
   },[])

   return [data,loading,isError]
}

export default useFetch