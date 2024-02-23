import React, { useState, useEffect, useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import CreateRoomForm from './CreateRoomForm';
import { useDeleteRoom } from './DeleteRoom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';

const RoomRow = ({ room }) => {
  const { id: roomId, name, maxCapacity, price, image, description } = room;
  const { isDeleting, deleteRoom } = useDeleteRoom();
  const [threeShow, setThreeShow] = useState(false);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThreeShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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

          <div
            className="flex items-center justify-end pr-8 text-2xl"
            ref={dropdownRef}
          >
            <button
              className={`hover:text-blue-700 ${threeShow ? 'hidden' : ''}`}
              onClick={() => setThreeShow(!threeShow)}
            >
              <BsThreeDotsVertical />
            </button>
            {threeShow && (
              <div className="dark:bg-gray-600 z-20 flex  flex-col items-center justify-center gap-2 rounded-md bg-gray-200 p-2 text-sm drop-shadow-xl transition-all duration-200 ease-in-out">
                <button
                  onClick={() => setShow((show) => !show)}
                  className="  flex items-center justify-center gap-1 rounded-md  bg-gray-300 px-3 py-2 font-semibold   text-green-600 ring-offset-2 transition-all ease-in-out hover:bg-gray-400 hover:text-green-700 focus:outline-none focus:ring focus:ring-gray-300  "
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
            )}
          </div>
        </div>
        {show && <CreateRoomForm roomToEdit={room} />}
      </div>
    </>
  );
};

export default RoomRow;
