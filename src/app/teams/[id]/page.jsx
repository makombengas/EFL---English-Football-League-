"use client"

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const Team = () => {
  const searchParams = useSearchParams()
 
const strTeam =  searchParams.get('strTeam')
const strBadge =  searchParams.get('strBadge')
const strBanner =  searchParams.get('strBanner')
const strFanart4 =  searchParams.get('strFanart4')
const strFanart3 =  searchParams.get('strFanart3')
const strLeague =  searchParams.get('strLeague')
const strDescriptionEN =  searchParams.get('strDescriptionEN')
const strColour1 =  searchParams.get('strColour1')
const strColour2 =  searchParams.get('strColour2')
const strColour3 =  searchParams.get('strColour3')
const strYoutube =  searchParams.get('strYoutube')

  console.log(strBadge)
  return (
    <div className="w-full h-full flex flex-col justify-center items-center  ">
      <div className="w-full h-[30vh] md:h-[20vh] flex justify-center items-center bg-[#001389] relative  text-slate-200 ">
      <Image src={strBanner} alt={strBanner} required priority className=' w-full h-[30vh] md:h-[20vh] object-cover' width={500} height={500} />
        <div className=" bg-[#02010175] backdrop-blur-sm w-full h-[30vh] md:h-[20vh] flex justify-center items-center absolute    md:left-[0rem] md:top-[0rem]  flex-col gap-2">
            <div className="flex justify-center items-center gap-4 flex-col absolute  md:top-4 top-[40%] ">
            <Image src={strBadge} alt={strBadge} required priority className=' w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] object-cover' width={200} height={200} />
            
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center flex gap-12 mt-8 px-2 md:px-4 lg:px-12 xl:px-24">
        <div className="grid grid-rows-3 flex-cols md:grid-flow-col gap-4 ">
          <div class="row-span-3 ...">
            <div className="md:w-[30rem] xl:w-[40rem] p-4 h-full  ">
                <h1 className='text-sm w-full font-medium md:text-xl rounded-md'>
                 <b className='uppercase'>Team: </b> {strTeam}
                </h1>

                <h2 className="text-sm w-full md:text-lg py-4 font-medium">
                <b className='uppercase'>League: </b>  {strLeague}
                </h2>

                <p className="text-sm  ">
                 {strDescriptionEN}
                </p>
            </div>
          </div>
          <div class="col-span-2 ...">
          <Image src={strFanart4} alt={strFanart4} required priority className=' w-full h-full object-cover' width={500} height={500} />
          </div>
         <div class="row-span-2 col-span-2 ...">
         03
         </div>
       
        </div>
        
      </div>
    </div>
  )
}

export default Team