import React from 'react'

const Count = (props) => {
   const {text,number}=props; //destructuring
    console.log(`${text} Rendered`);
  return (
        <h1>{text}:{number}</h1>
  )
}

export default React.memo(Count);