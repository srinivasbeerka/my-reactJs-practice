import React from "react"

const obj={
   email:"srinivasbeerka18603@gmail.com",
   address:"Mancherial, Telangana 504208"
}

const Innercomp=()=>{
    return <h1>hey this is inner component</h1>
}

const Printname=()=>{
   return <Innercomp/>;
}
const Myname=()=>{
    return <h1>Srinivas</h1>
}
const Age=()=>{
    return <h1>22</h1>
}
const Email=()=>{

    return(
        <>{obj.email}</>
    )
    
}




const Demo1=()=>{
    return(

        <div>
            <h1>Hello {new Date().toLocaleTimeString()}</h1>

            <Printname/>


              <h1>Name:<Myname/></h1>
              <h1>Age:<Age/></h1>
              <h1>Email: <Email/></h1>
             <h1>Address:{obj.address}</h1>
        </div>
    )
}

export default Demo1;