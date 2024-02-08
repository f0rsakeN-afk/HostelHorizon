import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-y-2 pt-8 text-xl font-semibold text-gray-700">
        <li>
          <NavLink to="/dashboard">DashBoard</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
        <li>
          <NavLink to="/rooms">Rooms</NavLink>
        </li>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
