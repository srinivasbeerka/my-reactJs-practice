import React from "react";

const Demo=()=>{
    const firstname="virat";
    const lastname="kohli";



    const user={

        firstname:"srinivas",
        lastname:"beerka"

    }


    function printname(user){
        return `my full name is ${user.firstname} ${user.lastname}`
    }

    return(
        <div>

            <h1>hello {firstname} {lastname}</h1>
           <h2>hi {printname(user)}</h2>
            <p>hey what are you doing</p>
        </div>
    )
} 


export default Demo;