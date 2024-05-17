"use client";
import Image from "next/image";
import UseState from "./components/useStateComponent";
import Useeffect from "./components/useEffectComponent";
import ComponentA from "./components/componentA";


export default function Home() {
  return (
 <div className="flex items-center justify-center h-screen">
  <ComponentA/>
 
 </div>
  );
}
