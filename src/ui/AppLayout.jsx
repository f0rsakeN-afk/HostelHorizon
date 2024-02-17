import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoIosSunny } from 'react-icons/io';
import { BsMoonStarsFill } from 'react-icons/bs';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode && 'dark'}>
      <button
        onClick={toggle}
        className="absolute right-6 top-6 z-20 text-4xl "
      >
        {darkMode ? (
          <IoIosSunny className="infinite animate-pulse text-yellow-500 ease-linear " />
        ) : (
          <BsMoonStarsFill className="text-slate-100 outline-none" />
        )}
      </button>
      <div className=" grid h-screen w-full grid-cols-5 bg-[#297373] pl-2 text-gray-100 dark:bg-[#0f172a]  lg:grid-cols-9 lg:pl-6">
        <Sidebar />
        <div className=" col-span-4 lg:col-span-8  ">
          <div className="grid h-screen grid-rows-12">
            <Header />
            <main className="row-span-11 scroll-smooth overflow-scroll  bg-[#ebeeef] p-4  dark:bg-[#495159]">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
