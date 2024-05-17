"use client";
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'

const Component1 = () => {
    const[counter , setCounter] =useState(0);
    const increment =()=>{
        setCounter(counter+1)    }
        const decrement =()=>{
            if(counter<=1) return;
            setCounter(counter-1)    }
    useEffect(()=>{
        console.log("compoent1 mounted")
    })
  return (
    <div>
        <div className='font-bold text-3xl flex items-center justify-center gap-3 '>
        <Button variant = "destructive" onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
      

        </div>
    </div>
  )
}

export default Component1