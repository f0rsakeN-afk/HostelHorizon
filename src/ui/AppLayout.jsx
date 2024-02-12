import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className=" grid h-screen w-full grid-cols-5 lg:grid-cols-7 pl-2 lg:pl-6">
      <Sidebar />
      <div className=" col-span-4 lg:col-span-6  ">
        <div className="grid h-screen grid-rows-12">
          <Header />
          <main className="row-span-11 bg-[#E8E8E8]  p-4 overflow-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
