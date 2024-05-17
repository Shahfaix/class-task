"use client";
import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
 
type Post={
userId:number;
id: number;
title: string;
body:string;

}


const Component3 = () => {
    const [data , setData]=useState<Post []| null >(null);

    const [postId ,setPostId]=useState(1)
    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/1 ${postId}`)
        .then(res=>res.json()) //it get response from database(but not read able)
        .then(data=>setData(data))

        .catch((error)=>{console.log(error)})

    },[postId])
  return (
 
    <div className='flex flex-col gap-5'>
    <div className='w-[500px] bg-slate-200 rounded p-10 shadow-lg border-black/25'>
        { data?(<>

            
            <h1 className='font-bold text-xl border border-gray-400'> {data?.title} </h1>
            <h2>
            {data?.body}
        </h2>
        </> ):(<>
        Loading......
        </>)
       
        }
     
    </div >
    <div className='flex justify-between'>
    <Button className={cn("",{"invisible":postId===1})} onClick={()=>{if(postId<=1)return; setPostId(postId-1)}}>
        prev

    </Button>
    <Button onClick={()=>{setPostId(postId+1)}}>
        next

    </Button>
    </div>
   
    </div>
  )
}

export default Component3
