// 'use client';
import React, {useEffect, useState } from "react";
import Image from "next/image";
// import ImagePuplic from "@/assets/img_1.jpg";

export const Carosel = ()=>  {

  const [carosel, setCarosel] = useState<number>(1);

  useEffect(() => {

    let int = setInterval(() => {
       setCarosel(prev =>((prev+1) >= 8 ? 1 : prev+1));
      },5000);

   return () => clearInterval(int);
  }, []);

   const handlePrevPage = () => {
   setCarosel(prev => ((prev-1) <=0 ? 7 : prev-1));
  console.log("prev")
  }

  const handleNextPage = () => {
  setCarosel(prev => ((prev+1) >= 8 ? 1 : prev+1));
  console.log("next")
  }

  return (
    <main className="relative flex h-[calc(100vh-70px)] w-screen flex-col
    justify-center items-center">

      <div className="flex w-full h-full">
        
       <Image 
        className="w-full h-full object-cover object-center" 
        sizes="100vw"
        alt="Image" 
        src="/cta2.jpg"
        width={400} 
        height={300}
        /> 
        
        
        
        <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c]
        rounded-lg">
          <h2 className="text-4x1">Beautiful landscape{}</h2>
          <p className="text-2x1 mt-4 text-purple-200">The magic of natural</p>
        </div>

      </div>
      <div onClick={handlePrevPage} className="z-10 fixed bottom-1/2 left-4 text-2x1 font-semibold">
        <span className="inline-bloc transition-transform hover:trabslate-x-1
        motion-reduce:transform-none cursor-pointer hover:text-violet-500">&lt;-
        </span>
      </div>

      <div onClick={handleNextPage} className="z-10 fixed bottom-1/2 right-4 text-2x1 font-semibold">
        <span className="inline-bloc transition-transform hover:trabslate-x-1
        motion-reduce:transform-none cursor-pointer hover:text-violet-500">-&gt;
        </span>
      </div> 

    </main>
  )

}
