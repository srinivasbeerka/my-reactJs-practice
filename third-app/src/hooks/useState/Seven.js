import React, { useState } from "react";

//conditional rendering


const Seven=()=>{

   const[showData,setShowData]= useState(false);

   const handler=()=>{
      return(
        setShowData(!showData)
      )
   }

    return(
        <div>
            <button className="btn btn-success" onClick={handler}>{showData ? 'Hide' : 'Show'}</button>
            {
                showData && (
                    <div className="container-fluid">
                           Virat Kohli is an Indian international cricketer
                            and former captain of the India national cricket team.
                             He plays for Delhi in domestic cricket and Royal Challengers Bangalore 
                    </div>
                )
            }
        </div>
    )
    
}


export default Seven;