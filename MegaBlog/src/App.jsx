
import { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './Store/authslice'

import './App.css'
import { Flag } from 'appwrite'
import { Footer, Header } from './component'

function App() {
   const [loading ,setLoading]=useState(true)
   const  dispatch=useDispatch()

   useEffect(()=>{
        authService.getCurrentUser()
        .then((userData)=>{
          if(userData){
            dispatch(login({userData}))
          }else
          {
              dispatch(logout())
          }
        })
        .finally(()=>setLoading(false))
   },[])
 
   return !loading ? (
    <div  className='min-h-screen flex flex-wrap content-between  bg-gray-500'>
       <div className='w-full block'>
            <Header/>
                <main>
                  {/* TODO:  <Outlet/> */}
                </main>
            <Footer/>
       </div>
    </div>
   ) : null
}

export default App
 