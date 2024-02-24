import React from 'react';
import { useState } from 'react';
import CabinTable from '../features/rooms/RoomTable';
import CreateRoomForm from '../features/rooms/CreateRoomForm';
import Title from '../ui/Title';
import RoomOper from '../features/rooms/RoomOper';

const Rooms = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between ">
        <Title text={`All rooms`} />
        <RoomOper />
      </div>
      <div className="">
        <CabinTable />
      </div>
      <section className="flex items-center justify-center py-4 ">
        <button
          className="rounded-lg  bg-[#4338ca] px-4 py-2 text-xl font-semibold tracking-wide   text-gray-200 ring-offset-2 transition-all duration-300 ease-linear  focus:outline-none focus:ring focus:ring-[#4338ca] dark:text-gray-200  "
          onClick={() => setShow((show) => !show)}
        >
          {show ? `Close room` : `Add room`}
        </button>
      </section>
      {show && <CreateRoomForm />}
    </div>
  );
};

export default Rooms;
