import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  Legend
} from 'recharts';
import { getBookings } from '../bookings/Bookings';
import { Spinner } from 'keep-react';

function BookingsChart() {
  const { isLoading, bookings } = getBookings();

  if (isLoading) {
    return <Spinner />;
  }

  function countBookingsByRoom() {
    const counts = {};
    bookings.forEach((booking) => {
      const room = booking.bookedRoom;
      counts[room] = counts[room] ? counts[room] + 1 : 1;
    });
    return counts;
  }

  const roomCounts = countBookingsByRoom();

  const data = Object.keys(roomCounts).map((room) => ({
    room,
    count: roomCounts[room],
  }));

  return (
    <div>
      <h1 className="pb-2 pl-12 text-xl text-gray-600 dark:text-gray-200 ">
        Bookings per room
      </h1>
      <ResponsiveContainer width="100%"  aspect={3}>
        <BarChart data={data} width={1200}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="room" />
          <YAxis  />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Legend/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BookingsChart;
