import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const AppLayout = () => {
  return (
  <div className="">
    <Header/>
    <Sidebar/>
    <main>
        <Outlet/>
    </main>

  </div>
  )
}

export default AppLayout