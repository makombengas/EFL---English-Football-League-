"use client"
import { navigation } from "@/data/data";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import SubMenu from "./subMenu/SubMenu";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(null)
    const handleHandy = () => {
        setOpen(!open)
    }
    const handleSubMenu = (id) => {
      
        const menu = navigation.find(menu => menu.id === id)
      if(menu){
        setSubMenu(menu)
    }
}
console.log("SubMenu:", subMenu)

  return (
    <div className="bg-[#EEEFF0] fixed w-full md:sticky z-50 top-0  ">
        <div className="z-10  md:z-0  py-1 bg-[#001389] text-[#EEEFF0] px-2 md:px-4 lg:px-12 xl:px-24 justify-between md:justify-start flex items-center gap-2 text-[.55rem] md:text-[.7rem]  ">
            <div className="">Store Bildung Home</div>
            <hr className="w-[1.5rem] hidden md:block h-[.112rem] bg-black rotate-90 " />
            <div className="">Verlassen</div>
        </div>

        <div className=" px-2 md:px-4 lg:px-12 xl:px-24 py-1 flex items-center justify-between">
             <Link href="/" className="z-10" onClick={()=> setOpen(false)} >
             <div className="z-10">
             {/* <FaApple className=" text-2xl md:text-4xl   " /> */}
             <Image className="w-[3.5rem] md:w-[5rem] " src="/images/league_Logo.png" priority alt="apple" width={80} height={80} />
             </div>
             </Link>
            <div className=" py-2 md:py-1 flex  items-center gap-4 text-[.7rem] md:text-[.7rem]  lg:text-[.8rem] xl:text-[1rem] overflow-scroll md:overflow-hidden h-full md:h-auto ">
                <div className={`${open ? " mt-5 md:mt-0 transition-left ease-linear duration-300  flex items-center justify-center md:justify-start  gap-4 flex-col left-0 transform-x-[-50%] w-full md:w-auto top-0 h-screen md:h-auto bg-gray-100 md:bg-transparent  absolute md:static md:flex-row" : "  mt-5 md:mt-0   flex items-center justify-center md:justify-start  gap-4 flex-col left-[100%] transform-x-[-50%] w-full md:w-auto top-0 h-screen md:h-auto bg-gray-100 md:bg-transparent  absolute md:static md:flex-row"}`}>
                    {
                        navigation.map(nav=>(
                            <Link className="z-30 border-b-4 border-b-transparent py-1 hover:border-b-[#BA0C2F] " key={nav.id} href={nav.link} onMouseOver={()=> handleSubMenu(nav.id)} onMouseLeave={()=> setSubMenu(false)} onClick={()=> setOpen(false)}>{nav.name}</Link>
                        ))
                    }
                  
                <div  className="z-30 flex items-center  gap-4">
                    <IoIosSearch className=" text-[1.15rem] md:text-[1.5rem] cursor-pointer  hover:text-gray-400 " />
                    <GrShop className=" text-[1rem] md:text-[1.25rem] cursor-pointer  hover:text-gray-400" />
                </div>
                </div>
                <div onClick={handleHandy} className="  cursor-pointer transition-all ease-linear duration-300 md:hidden flex flex-col items-center gap-[.25rem] z-80" >
                    <hr className={`${open ? "z-50 border-none rotate-[45deg] transition-rotate ease-linear duration-300 bg-black h-[2px] w-6" : "transition-all ease-linear duration-300 border-none bg-black h-[2px] w-6"}`} />
                    <hr className={`${open ? " border-none opacity-0 transition-rotate ease-linear duration-300 bg-black h-[2px] w-6" : "transition-all ease-linear duration-300 border-none bg-black h-[2px] w-6"}`} />
                    <hr className={`${open ? "z-50  border-none rotate-[-45deg] absolute transition-rotate ease-linear duration-300 bg-black h-[2px] w-6" : " transition-all ease-linear duration-300  border-none bg-black h-[2px] w-6"}`} />
                </div>
            </div>
        </div>
                        {/* {subMenu  && 
                        
                        <div className=" ">
                        <SubMenu/>
                        </div>
                        }
       */}
                   
    </div>
  )
}

export default Navbar