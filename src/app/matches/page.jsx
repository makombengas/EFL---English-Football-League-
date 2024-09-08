"use client"

import Image from 'next/image'
import Link from 'next/link'
import  { Suspense, useEffect, useState } from 'react'
import NotFound from './not-found'

const Products = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const apiKey = process.env.PRODUCT_KEY_URL
      console.log(apiKey)
        const handleProducts = async () => {
           try {
            const data = await fetch(`${apiKey}`,{
               method: 'GET',
               headers:{
         "content-type": "application/json",    
       }
            })
           const posts = await data.json()
          
           
           if(data.status === 200){
            setProducts(posts.teams)
            console.log(posts.teams)
           }
           
           setProducts(posts.teams)
           const timer = setTimeout(() => {
          
            setLoading(false);
          }, 2000); // 2000 milliseconds = 2 seconds
      
          return () => clearTimeout(timer); // Clean up the timer on unmount or src change
        }
        catch (error) {
          console.log(error)  
       
           }
        }

        handleProducts()
    }, [])
    if(loading){
      return <div className='-z-50 w-full h-screen flex justify-center items-center backdrop-blur-4xl'>
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
    if(!products){
      <NotFound/>
     }
  return (
    <div>
        
       <Suspense fallback={loading}>
       <div className="w-full flex justify-center flex-wrap mt-20 md:mt-8  gap-4">
          {
           products.map((product)=>(
                  <div key={product.idTeam} className="w-full flex flex-col items-center md:items-start md:w-1/3 xl:w-1/5 p-2">
                  <Link
               
                  href={{
                  pathname: `/teams/${product.strTeam}`,
                  query: {
                    strTeam: product.strTeam,
                    idTeam: product.idTeam,
                    strBadge: product.strBadge,
                    strDescriptionEN: product.strDescriptionEN,
                    strBanner: product.strBanner,
                    strFanart4: product.strFanart4,
                    strFanart3: product.strFanart3,
                    strLeague: product.strLeague,
                    strDescriptionEN: product.strDescriptionEN,
                    strColour1: product.strColour1,
                    strColour2: product.strColour2,
                    strColour3: product.strColour3,
                    strYoutube: product.strYoutube,
                   


                    
                    
                  }
                }}>
                      <Image className='w-[80%]  md:w-full object-cover' width={500} height={500} priority src={product.strEquipment} alt={product.strEquipment}  />
                      <div className="w-full flex justify-between items-center mt-5">
                      <h3 className="text-lg font-bold">{product.strTeam}</h3>
                      <p className="text-sm"> <b>Since:</b>  {product.intFormedYear}</p>
                      </div>
                      <p className="text-sm mt-2">{product.strDescriptionEN.slice(0, 102)}...</p>
                         </Link>
                  </div>
              ))
          }
       </div>
       </Suspense>
    </div>
  )
}

export default Products