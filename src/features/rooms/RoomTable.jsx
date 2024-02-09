import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getRooms } from '../../services/apiRooms';
import Spinner from '../../ui/Spinner';
import RoomRow from './RoomRow';

const CabinTable = () => {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,
  });
  if (isLoading) return <Spinner />;
  return (
    <div className="" role="tab">
      <div
        className="text-md grid grid-cols-4 pt-8 font-semibold text-gray-700"
        role="row"
      >
        <h1 className="">Room</h1>
        <h1 className="">Capacity</h1>
        <h1 className="">Price</h1>
        <h1 className="">Description</h1>
      </div>
      {rooms.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </div>
  );
};

export default CabinTable;
