import React from 'react';

function BookingsRow({ bookingData }) {
  const { isPaid, studentId, roomId, admissionFee, startDate, endDate } =
    bookingData;
  return (
    <div className="grid grid-cols-6 items-center  justify-center gap-2 gap-2 border-b-2 border-gray-400 py-2 text-sm text-gray-700 dark:text-gray-200">
      <h2 className="">{studentId}</h2>
      <h2 className="">{roomId}</h2>
      <p className="">{startDate}</p>
      <p className="">{endDate}</p>
      <h2 className={`${isPaid ? 'text-green-500' : 'text-red-500'}`}>
        {isPaid ? 'Paid' : 'Not paid'}
      </h2>
      <h2 className="">{admissionFee}</h2>
    </div>
  );
}

export default BookingsRow;
