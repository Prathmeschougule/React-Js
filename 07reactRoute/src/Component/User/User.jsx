import React from 'react'
import { useParams } from 'react-router'

function User() {

    const {userid}=useParams()
     
  return (
    <div>
        <h1 className='bg-slate-700 text-center text-white'>User:{userid}</h1>
    </div>
  )
}

export default User
