import React from 'react';
import Title from '../ui/Title';
import BookingsTable from '../features/bookings/BookingsTable';
import BookingOper from '../features/bookings/BookingOper';

const Bookings = () => {
  return (
    <div data-aos='zoom-in' >
      <div className="flex items-center justify-between">
        <Title text={`Bookings`} />
        <BookingOper />
      </div>
      <BookingsTable />
    </div>
  );
};

export default Bookings;
