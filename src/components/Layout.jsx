import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

const Layout = () => {
  return (
   
   <>
 <div className="flex flex-row w-screen h-screen overflow-hidden">
  <div className="bg-black">
    <Sidebar></Sidebar>
  </div>
  <div className='px-2' >
  
    <Navbar></Navbar>
    
 
  <div className="bg-transparent  mt-4 h-5/6 overflow-y-auto">
   
   <Outlet></Outlet>
  </div>
  </div>
  
</div> 
   </>

  )
}

export default Layout
