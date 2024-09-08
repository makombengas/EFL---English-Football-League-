export const GET = async () => {
    const apiKey = process.env.PRODUCT_KEY_URL
  
  const data = await fetch(`${apiKey}`,{
        method: 'GET',
       headers:{
         "content-type": "application/json",    
       }
     })
    const posts = await data.json()

    return new Response(JSON.stringify(posts.teams))
}