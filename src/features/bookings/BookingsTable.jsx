import React from 'react';
import { getBookings } from './Bookings';
import Spinner from '../../ui/Spinner';
import BookingsRow from './BookingsRow';
import { useSearchParams } from 'react-router-dom';

function BookingsTable() {
  const { isLoading, bookings } = getBookings();

  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('booking') || 'all';

  let filteredBookingData;
  if (filterValue === 'all') {
    filteredBookingData = bookings;
  }

  if (filterValue === 'confirmed') {
    filteredBookingData = bookings.filter(
      (booking) => booking.isConfirmed === true,
    );
  }
  if (filterValue === 'unconfirmed') {
    filteredBookingData = bookings.filter(
      (booking) => booking.isConfirmed === false,
    );
  }
  if (isLoading) return <Spinner />;
  return (
    <div className="" role="tab">
      <div className="text-md grid grid-cols-6 items-center justify-center gap-2 overflow-x-auto pt-4 font-semibold text-gray-700 dark:text-gray-200">
        <div className="">StudentId</div>
        <div className="">RoomId</div>
        <div className="">Start Date</div>
        <div className="">End Date</div>
        <div className="">Booking Status</div>
        <div className="">Admission Fee</div>
      </div>
      {filteredBookingData.map((bookingData) => (
        <BookingsRow bookingData={bookingData} key={bookingData.id} />
      ))}
    </div>
  );
}

export default BookingsTable;
