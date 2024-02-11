import React from 'react';
import Spinner from '../../ui/Spinner';
import RoomRow from './RoomRow';
import { getRooms } from './UseRooms';

const CabinTable = () => {
  const { isLoading, rooms } = getRooms();
  if (isLoading) return <Spinner />;
  return (
    <div className="" role="tab">
      <div
        className="text-md grid grid-cols-6 pt-8 font-semibold text-gray-700"
        role="row"
      >
        <h1 className=""></h1>
        <h1 className="">Room</h1>
        <h1 className="">Capacity</h1>
        <h1 className="">
          Price<span className="text-xs">(RS)</span>
        </h1>
        <h1 className="">Description</h1>
      </div>
      {rooms.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </div>
  );
};

export default CabinTable;
