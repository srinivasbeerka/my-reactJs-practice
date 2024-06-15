import React, { useEffect } from 'react'


const UsePageTitle = (count) => {
    useEffect(()=>{
        document.title=`count-${count}`;
    },[count])
}

export default UsePageTitle