// 'use client';
import React, {useEffect, useState } from "react";
import Image from "next/image";
// import ImagePuplic from "@/assets/img_1.jpg";

export const Carosel = ()=>  {

  const [carosel, setCarosel] = useState<number>(1);

  useEffect(() => {

    let int = setInterval(() => {
       setCarosel(prev =>((prev+1) >= 3 ? 1 : prev+1));
      },10000);

   return () => clearInterval(int);
  }, []);

   const handlePrevPage = () => {
   setCarosel(prev => ((prev-1) <= 0 ? 2 : prev-1));
 
  }

  const handleNextPage = () => {
  setCarosel(prev => ((prev+1) >= 3 ? 1 : prev+1));
  
  }

  return (
    <main className="relative flex h-[calc(100vh-70px)] flex-col
    justify-center items-center">

      <div className="max-w-screen-lg">
       <Image 
        className="object-cover object-center" 
       
        fill alt="Image" 
        src={`/cta_${carosel}.jpg`}
        
        /> 
        

        <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c]
        rounded-lg">
          <h2 className="text-4x1">Instituições do estado de Mato Grosso {carosel} </h2>
          <p className="text-2x1 mt-4 text-purple-200">VEJA MAIS</p>
        </div>

      
      <div onClick={handlePrevPage} className="absolute bottom-1/2 left-4 text-2x1 font-semibold">
        <span className="inline-bloc transition-transform hover:trabslate-x-1
        motion-reduce:transform-none cursor-pointer hover:text-violet-500">&lt;-
        </span>
      </div>

      <div onClick={handleNextPage} className="absolute bottom-1/2 right-4 text-2x1 font-semibold">
        <span className="inline-bloc transition-transform hover:trabslate-x-1
        motion-reduce:transform-none cursor-pointer hover:text-violet-500">-&gt;
        </span>
      </div> 
      </div>
    </main>
  )

}
