"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from "next/link";

const TeamsBanner = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => 
         
         {
          setData(data)
          setLoading(false)
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
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      ><div className="  bg-[#001389] h-full  px-2  ">
        {
          data && data.map((item) => (
            <SwiperSlide key={item.idTeam}>

                <Link href={{
                  pathname: `/teams/${item.strTeam}`,
                  query: {
                    strTeam: item.strTeam,
                    idTeam: item.idTeam,
                    strBadge: item.strBadge,
                    strDescriptionEN: item.strDescriptionEN,
                    strBanner: item.strBanner,
                    strFanart4: item.strFanart4,
                    strFanart3: item.strFanart3,
                    strLeague: item.strLeague,
                    strDescriptionEN: item.strDescriptionEN,
                    strColour1: item.strColour1,
                    strColour2: item.strColour2,
                    strColour3: item.strColour3,
                    strYoutube: item.strYoutube,





                    
                    
                  }
                }}>
                  <div  className=" hover:scale-105 transition-scale duration-300 ease-linear cursor-pointer bg-slate-200 w-full flex flex-col items-center rounded-lg  px-2   py-8 ">
                      <Image className='w-[15%] h-[15%] md:w-[45%] object-cover' width={200} height={200} priority src={item.strBadge} alt={item.strBadge}  />
                      <h1 className="text-lg lg:text-sm xl:text-xl text-[#001389] text-center font-extrabold  mt-5">{item.strTeam}</h1>
                  </div>
                </Link>

            </SwiperSlide>
          ))
        }
    </div>
       
      </Swiper>
    
  )
}

export default TeamsBanner