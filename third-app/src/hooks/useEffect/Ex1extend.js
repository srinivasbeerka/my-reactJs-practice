import React from 'react'
import { useState,useEffect } from 'react';

  const Url="https://jsonplaceholder.typicode.com/users";

const Ex1extend = () => {
  
    const [usersdata,setUserData]=useState([]);
    const [loading,setLoading]=useState(false);
    


    const UserFetchData= async (apiUrl)=>{

        setLoading(true)

        try {
            const response= await fetch(apiUrl);

            const data= await response.json();

            setUserData(data);

            setLoading(false)
        } catch (error) {

            setLoading(false)
            
        }

    }

    useEffect(()=>{ 

        UserFetchData(Url)
    },[])

    if(loading){
        return(
            <div>
            <h3>Loading...</h3>
          </div>
    
        )
    }

return (
<div>
    <ul>
        {
            usersdata.map((eachObj)=>{

                const{id,name,username,email}=eachObj;

                return(
                    <li key={id}>

                        <div>
                            name:{name}
                        </div>
                        <div>
                            username:{username}
                        </div>
                        <div>
                            email:{email}
                        </div>

                    </li>
                )

            })
        }
    </ul>
</div>
)
}

export default Ex1extend