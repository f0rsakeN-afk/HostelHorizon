import React from 'react';
import Spinner from '../../ui/Spinner';
import RoomRow from './RoomRow';
import { getRooms } from './UseRooms';
import { useSearchParams } from 'react-router-dom';

const CabinTable = () => {
  const { isLoading, rooms } = getRooms();
  //console.log(rooms);
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('price') || 'all';


  //console.log(filterValue);
  let filteredRoomData;

  if (filterValue === 'all') {

    filteredRoomData = rooms;
  }

  if (filterValue === 'price-inc') {
    const lowest = (a, b) => {
      return a.price - b.price;
    };
    filteredRoomData = rooms.sort(lowest);
  }

  if (filterValue === 'price-dec') {
    const highest = (a, b) => {
      return b.price - a.price;
    };
    filteredRoomData = rooms.sort(highest);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="" role="tab">
      <div
        className="text-md grid grid-cols-6 pt-8 font-semibold text-gray-700 dark:text-gray-200"
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
      {filteredRoomData.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </div>
  );
};

export default CabinTable;
