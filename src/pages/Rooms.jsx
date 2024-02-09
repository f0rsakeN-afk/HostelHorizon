import React from 'react';
import CabinTable from '../features/rooms/RoomTable';

const Rooms = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold  text-gray-700 uppercase underline underline-offset-4 decoration-[#936ce0]">All rooms</h1>

      <div className="">
        <CabinTable/>
      </div>
    </div>
  );
};

export default Rooms;
