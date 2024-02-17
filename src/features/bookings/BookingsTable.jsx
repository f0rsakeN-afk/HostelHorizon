import React from 'react';
import { getBookings } from './Bookings';
import Spinner from '../../ui/Spinner';
import BookingsRow from './BookingsRow';

function BookingsTable() {
  const { isLoading, bookings } = getBookings();

  if (isLoading) return <Spinner />;
  return (
    <div className="" role="tab">
      <div className="text-md grid grid-cols-6 items-center justify-center gap-2 pt-4 font-semibold text-gray-700 dark:text-gray-200">
        <div className="">StudentId</div>
        <div className="">RoomId</div>
        <div className="">Start Date</div>
        <div className="">End Date</div>
        <div className="">Booking Status</div>
        <div className="">Admission Fee</div>
      </div>
      {bookings.map((bookingData) => (
        <BookingsRow bookingData={bookingData} key={bookingData.id} />
      ))}
    </div>
  );
}

export default BookingsTable;
