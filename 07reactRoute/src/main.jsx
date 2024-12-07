import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout  from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import Github, { githubInfoLoder } from './Component/Github/Github.jsx'

// Routing Method One 
 
// const router=createBrowserRouter([
// {
//   path:'/',
//   element:<Layout/>,

//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     }
//   ]
// }
// ])



// Routing Method Second  

const router=createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='user/:userid' element={<User/>}/>
          <Route 
          loader={githubInfoLoder}
          path='github' element={<Github/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
