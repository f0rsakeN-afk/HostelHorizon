import React from 'react';
import Title from '../ui/Title';

import BookingsChart from '../features/dashboard/BookingsChart';

const Dashboard = () => {
  return (
    <div>
      <Title text={'Dashboard'} />
      
      <BookingsChart />
    </div>
  );
};

export default Dashboard;
