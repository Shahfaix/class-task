"use client";
import React, { useState } from 'react'

import { Button } from '@/components/ui/button';



const UseState = () => {
    const [counter, setCounter]= useState(0);
    const increment =()=>{
        setCounter(counter+1)    }
        const decrement =()=>{
            if(counter<=1) return;
            setCounter(counter-1)    }
            
           

  return (
    <div className='font-bold text-3xl flex items-center justify-center gap-3 '>
        <Button variant = "destructive" onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
      
    </div>
  )
}

export default UseState
