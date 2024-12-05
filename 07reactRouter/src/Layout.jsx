import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/footer/Footer'


// This is the Provide from the router this use for the use the layout as the base,
// where we user the outlet there we can change 
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
