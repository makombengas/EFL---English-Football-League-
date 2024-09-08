"use client"
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";



const BannerVideo = () => {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => 
       
       {
        
        if(data.status === 200){
          setData(data[10])
          console.log(data[10])
         }
         setData(data[10])
         const timer = setTimeout(() => {
        
          setLoading(false);
        }, 1000); // 2000 milliseconds = 2 seconds
    
       }
      );
  }, []);



  if(loading){
    return <div className='-z-50 w-full h-screen flex justify-center items-center'>
             <div className="flex items-center space-x-2">
<div className="animate-pulse flex justify-center items-center rounded-full border-2 border-gray-500 h-20 w-20 ">
<h1 className="text-3xl font-extrabold text-[#BA0C2F] ">EFL</h1>
</div>
<div className="space-y-2">
  <div className="animate-pulse rounded-md bg-[#0012899c] h-4 w-[200px]"> 
     
    </div>
  <div className="animate-pulse rounded-md bg-[#ba0c2f9b] h-4 w-[170px]">  </div>
</div>
</div>
    </div>
  }

  return (
    <Suspense fallback={loading}>
            <div className=" h-[60vh] bg-black -z-30 ">
        <div className=" w-full  h-full relative ">
          { data && <Image alt={data.strFanart3} className="object-cover object-left-top  " src={data.strFanart3} style={{width:"100%", height:"100%"}} layout="fill" objectFit="cover" />}
        <div className="text-white gap-2 md:gap-8 flex-col text-3xl font-bold absolute top-0 left-0 right-0 bg-[rgba(0,0,0,0.59)] bottom-0 flex items-center justify-center">
        <h1 className=" text-2xl   md:text-4xl xl:text-6xl">
        Who should you pick
        </h1>
        <p className=" text-sm  md:text-xl xl:text-4xl font-light">
         as your captain in gameweek 5?

        </p>
        <Link href="/matches" className="hover:text-[#ffffff] hover:border text-sm md:text-3xl hover:border-[#ffffff] hover:bg-transparent rounded-md px-3 py-1 bg-[#BA0C2F] text-white">View Teams</Link>
        </div>
        </div>
           
    </div>
    </Suspense>
  )
}

export default BannerVideo