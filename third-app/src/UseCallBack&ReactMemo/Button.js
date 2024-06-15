import React from 'react'

const Button = ({children,clickhandler}) => {
     console.log(`${children} Rendered`);
  return <button onClick={clickhandler}>{children}</button>
}

export default React.memo(Button);