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
      <h2
        className={`${isPaid ? ' bg-green-500' : 'bg-red-500'} py-.5 w-max rounded-full px-2 text-base font-semibold tracking-wide text-gray-200 shadow-sm shadow-slate-800 dark:shadow-slate-50`}
      >
        {isPaid ? 'Confirmed' : 'Unconfirmed'}
      </h2>
      <h2 className="">{admissionFee}</h2>
    </div>
  );
}

export default BookingsRow;
