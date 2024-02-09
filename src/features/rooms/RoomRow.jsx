import React from 'react';

const RoomRow = ({ room }) => {
  const { id: roomId, name, maxCapacity, price, image, description } = room;
  return (
    <div className="">
      <div role="row" className="grid grid-cols-4">
        <div className="flex gap-2">
          <img src={image} alt="room-image" />
          <h1 className="">{name}</h1>
        </div>
        <h2 className="">{maxCapacity}</h2>
        <span className="">{price}</span>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default RoomRow;
