import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
   <nav>
    <ul>
        <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
        <li><NavLink to='/bookings'>Bookings</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        <li><NavLink to='/students'>Students</NavLink></li>
        <li><NavLink to='/settings'>Settings</NavLink></li>
    </ul>
   </nav>
  )
}

export default MainNav