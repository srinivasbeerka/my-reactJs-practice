import React, { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button';
import Count from './Count';

const ParentComp = () => {

    const [age,setAge]=useState(0);
    const [salary,setSalary]=useState(7000);

   const incrementAge=useCallback(()=>{                //use callback is used to render the particular component when its state changes  // by using call back we can sort the rerendering issue 
    setAge(age+1);
  },[age])
    
  const incrementSalary=useCallback(()=>{
    setSalary(salary+1000)
  },[salary])

  return (
    <>
        <Title/>
        <Count text='Age' number={age}/>
        <Button clickhandler={incrementAge} >increment Age</Button>
        <Count text="salary" number={salary}/>
        <Button clickhandler={incrementSalary}>increment Salary</Button>
       
    </>
  )
}

export default ParentComp;