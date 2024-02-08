import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className="container grid h-screen w-full grid-cols-7 px-6">
      <Sidebar />
      <div className="col-span-6">
        <Header />
        <main className="bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
