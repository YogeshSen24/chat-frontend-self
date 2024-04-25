import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'

const Layout = () => {
  return (
    <div className='flex '>
      <Sidebar/>
      
      <div className='bg-gray-900 w-full' >
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout