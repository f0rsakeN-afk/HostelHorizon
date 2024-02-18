import React from 'react';
import Filter from '../../ui/Filter';

function BookingOper() {
  return (
    <div>
      <Filter
        filterField="booking"
        options={[
          { value: 'all', label: 'All' },
          { value: 'confirmed', label: 'Confirmed' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />
    </div>
  );
}

export default BookingOper;
