import React, { useEffect, useState } from 'react'
import { data } from 'react-router'
import { useLoaderData } from 'react-router'

function Github() {
    const data=useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Prathmeschougule')
    //     // Ghe the Resopnce In A String Format and Convert The String Into JSON Format  
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])


  return (
    <div className='bg-slate-600 p-6'>
        <h1 className='bg-slate-600 text-white m-5 p-5 text-center'>GitHub Followers:{data.followers}</h1>
        <img className='m-8 w-40' src={data.avatar_url} alt="Github" />
    </div>
  )
}

export default Github 


export const githubInfoLoder=async()=>{
   const responce=await fetch('https://api.github.com/users/Prathmeschougule ')
   return responce.json()
}
