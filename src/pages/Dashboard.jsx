import React from 'react';
import Title from '../ui/Title';

import BookingsChart from '../features/dashboard/BookingsChart';

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <Title text={'Dashboard'} />
      <div className="">
        <BookingsChart />
      </div>
    </div>
  );
};

export default Dashboard;
