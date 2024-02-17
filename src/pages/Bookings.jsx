import React from 'react'
import Title from '../ui/Title'
import BookingsTable from '../features/bookings/BookingsTable'

const Bookings = () => {
  return (
    <div>
      <Title text={`Bookings`} />
      <BookingsTable/>
    </div>
  )
}

export default Bookings