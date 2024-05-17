import { Button } from '@/components/ui/button'
import React from 'react'
type ComponentType={
    counter:number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}


const ComponentC = ( {counter,setCounter}:ComponentType) => {
  return (
    <div className='border border-black bg-blue-300 h-[75%] w-[75%] rounded-lg flex items-center justify-center flex-col'>
        
        ComponentC
        <div className=' font-bold text-3xl flex items-center justify-center gap-3'>
        <Button variant = "destructive" onClick={()=>setCounter(counter-1)}>-</Button>
        {counter}
        <Button onClick={()=>setCounter(counter+1)}>+</Button>
        </div>
        </div>
  )
}

export default ComponentC