import React from 'react';
import MainNav from './MainNav';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className=" flex flex-col items-center  py-6 "  >
      <Logo />
      <MainNav />
    </div>
  );
};

export default Sidebar;
