import React from 'react';
import MainNav from './MainNav';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className=" flex flex-col items-center border-r-2 border-gray-100 py-6 "  >
      <Logo />
      <MainNav />
    </div>
  );
};

export default Sidebar;
