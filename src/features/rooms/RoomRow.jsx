import React, { useState } from 'react';
import { FaEdit} from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import CreateRoomForm from './CreateRoomForm';
import { useDeleteRoom } from './DeleteRoom';

const RoomRow = ({ room }) => {
  const { id: roomId, name, maxCapacity, price, image, description } = room;
  const { isDeleting, deleteRoom } = useDeleteRoom();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="border-b-2 border-gray-400">
        <div
          role="row"
          className=" grid grid-cols-6 flex-col items-center gap-x-4  py-4 text-sm text-gray-700 dark:text-gray-200"
        >
          <img
            src={image}
            alt="room-image"
            className="h-24 w-44 rounded-sm drop-shadow-xl "
          />

          <h1 className="capitalize">{name}</h1>

          <h2 className="">{maxCapacity}</h2>

          <span className="font-semibold text-green-600">{price}</span>

          <p className="truncate">{description}</p>

          <div className="flex items-center justify-center gap-x-4">
          
            <button
              onClick={() => setShow((show) => !show)}
              className=" transirion  all flex items-center justify-center gap-1  rounded-md bg-gray-300 px-3 py-2   font-semibold text-green-600 ring-offset-2 ease-in-out hover:bg-gray-400 hover:text-green-700 focus:outline-none focus:ring focus:ring-gray-300 "
            >
              <FaEdit />
              Edit
            </button>

            <button
              onClick={() => deleteRoom(roomId)}
              disabled={isDeleting}
              className=" flex items-center justify-center gap-1 rounded-md bg-red-200 px-3 py-2 text-red-500 ring-offset-2 transition-colors hover:bg-red-300 hover:text-red-600 focus:outline-none  focus:ring focus:ring-red-200"
            >
              <RiDeleteBin5Line /> Delete
            </button>
          </div>
        </div>
        {show && <CreateRoomForm roomToEdit={room} />}
      </div>
    </>
  );
};

export default RoomRow;
