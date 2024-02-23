import React from 'react';

function DashboardTable() {
  return (
    <div className="text-md grid grid-cols-4 pt-4  font-semibold text-gray-700 dark:text-gray-200">
      <div className="">Statistics</div>
      <div className="">Today's activity</div>
      <div className="">Stay durations</div>
      <div className="">Sales</div>
    </div>
  );
}

export default DashboardTable;
