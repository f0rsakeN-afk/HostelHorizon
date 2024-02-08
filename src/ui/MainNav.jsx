import React from 'react';

import { FaHome, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import Navlink from './Navlink';

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-y-4 pt-8 text-xl font-medium text-gray-700">
        <li className=''>
          <Navlink to="/dashboard">
            <FaHome />
            Home
          </Navlink>
        </li>
        <li>
          <Navlink to="/bookings">
            <FaCalendarAlt />
            Bookings
          </Navlink>
        </li>
        <li>
          <Navlink to="/rooms">
            <MdOutlineBedroomParent />
            Rooms
          </Navlink>
        </li>
        <li>
          <Navlink to="/students">
            <FaUsers />
            Students
          </Navlink>
        </li>
        <li>
          <Navlink to="/settings">
            <IoMdSettings />
            Settings
          </Navlink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
