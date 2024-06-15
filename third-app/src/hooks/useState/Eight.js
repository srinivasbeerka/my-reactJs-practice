 import React, { useState } from 'react'
 
  const Eight = () => {

       const [firstname,setFirstname]=useState("");
       const [email,setEmail]=useState("");
       const [password,setPassword]=useState("");

      const changeFirstname=(e)=>{
        return setFirstname(e.target.value)
      }
      const changeEmail=(e)=>{
        return setEmail(e.target.value)
      }
      const changePassword=(e)=>{
        return setPassword(e.target.value)
      }

      const submitHandler=(e)=>{
          e.preventDefault();
          const obj={
            firstname:firstname,
            email:email,
            password:password
          }
    
          console.log(obj)
      } 



    
   return (
     <div>
       <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label className="form-label">FirstName</label>
                <input type="text" name='firstname' className="form-control" id="firstname" value={firstname} onChange={changeFirstname}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="email" value={email} onChange={changeEmail}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="password" value={password} onChange={changePassword}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
       </form>
     </div>

     
   )
 }

 export default Eight;
 