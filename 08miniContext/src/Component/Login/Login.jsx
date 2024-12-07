import React,{useState,useContext} from 'react'
import UserContext from '../../Context/UserContext'


function Login() {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)
    
   
    // const {setPassword}=useContext(UserContext)

    const handleSubmit =(e)=>{

        e.preventDefault()
        setUser({username,password})
      

    }

  return (
    <div className=' gap-2 m-4 flex'>
       
       <div>
         {/* <h2 className='text-cyan-500 font-semibold'> Login </h2> */}
                <input className='rounded-xl p-2 h-10' type="text"
                value={username}
                onChange={(e)=>setUserName(e.target.value)}
                placeholder='UserName' />
        </div>
        <div>
                <input className=' rounded-xl p-2  h-10' type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Password' />
        </div>
       

        <button onClick={handleSubmit} className='bg-green-600'>Submit</button>
    </div>
  )
}


export default Login
