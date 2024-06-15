import React, { useReducer } from 'react'

const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newPersons=state.data.filter((eachperson)=>{
            return eachperson.id !==action.payLoad;
        })

        return{
            ...state,
             data:newPersons,
             length:state.length-1
            }
    }
};

const UseReducer = () => {

    const initialState={
        data:[
            {id:1,firstname:"srinivas",email:"srinivas@gmail.com"},
            {id:2,firstname:"prabhas",email:"prabhas@gmail.com"}
        ],
        length:2
    }

    const[state,Dispatch]=useReducer(reducer,initialState);

    const deleteHandler=(id)=>{
        Dispatch({
            type:"DELETE_PERSON",
            payLoad:id
        })
    }

  return (
    <div>
        <h1>Current users length:{state.length}</h1>
        {
            state.data.map((eachObj)=>{
                const{id,firstname,email}=eachObj;

                return(
                    <div key={id}>
                        <h1>firstname:{firstname}</h1>
                        <p>email:{email}</p>
                        <button onClick={()=>{deleteHandler(id)}}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UseReducer