import React from 'react'
import { useState,useEffect } from 'react'


   const Url="https://jsonplaceholder.typicode.com/users";

const Ex1 = () => {


     
        const [usersdata,setUserData]=useState([]);
        
        


        const UserFetchData= async (apiUrl)=>{

            const response= await fetch(apiUrl);

            const data= await response.json();

            setUserData(data);

            

        }

        useEffect(()=>{ 

            UserFetchData(Url)
        },[])

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

export default Ex1