import React, { useState } from 'react'
import ComponentB from '../componentB'
import { Button } from '@/components/ui/button'

const ComponentA = () => {
    const[counter , setCounter]=useState(1);
  return (
    <div className='border border-black bg-green-400 h-[75%] w-[75%] rounded-lg flex flex-col items-center justify-center'> 
    <div className='font-bold text-3xl flex items-center justify-center gap-3'>
    <Button variant = "destructive" onClick={()=>setCounter(counter-1)}>-</Button>
        {counter}
        <Button onClick={()=>setCounter(counter+1)}>+</Button>
      
    </div>
    Component A
    
     
      <ComponentB counter={counter} setCounter={setCounter}/></div>
  

  )
}

export default ComponentA
