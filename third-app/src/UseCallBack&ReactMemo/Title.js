import React from 'react'

const Title = () => {
    console.log("Title rendered");
  return (
    <div><h1>UseCallBack demo & React.memo</h1></div>
  )
}

export default React.memo(Title);  //react.memo is used to render the component when ever state changes