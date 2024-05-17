import React from 'react'
import ComponentC from './components/componentC'
type ComponentType={
    counter:number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const ComponentB = ( {counter , setCounter} :ComponentType) => {
  return (
    <div className='border border-black bg-red-400 h-[75%] w-[75%] rounded-lg flex flex-col items-center justify-center' >ComponentB
    <ComponentC counter={counter} setCounter={setCounter}/></div>

  )
}

export default ComponentB