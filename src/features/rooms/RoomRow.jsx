import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { deleteRoom } from '../../services/apiRooms';
import CreateRoomForm from './CreateRoomForm';

const RoomRow = ({ room }) => {
  const { id: roomId, name, maxCapacity, price, image, description } = room;

  const queryClient = useQueryClient();
  const [show, setShow] = useState(false);

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteRoom(id),
    onSuccess: () => {
      toast.success('Room successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <>
      <div className="border-b-2">
        <div
          role="row"
          className=" grid  grid-cols-6 flex-col items-center gap-4  py-4 text-sm text-gray-700"
        >
          <img
            src={image}
            alt="room-image"
            className="h-24 w-44 rounded-sm drop-shadow-xl"
          />

          <h1 className="capitalize">{name}</h1>

          <h2 className="">{maxCapacity}</h2>

          <span className="font-semibold text-green-600">{price}</span>

          <p className="truncate">{description}</p>

          <div className="flex items-center justify-center gap-x-4">
            <button
              onClick={() => setShow((show) => !show)}
              className=" transirion  all flex items-center justify-center gap-1  rounded-md bg-gray-200 px-3 py-2   font-semibold text-green-600 ring-offset-2 ease-in-out hover:bg-gray-300 hover:text-green-700 focus:outline-none focus:ring focus:ring-gray-300 "
            >
              <FaEdit />
              Edit
            </button>

            <button
              onClick={() => mutate(roomId)}
              disabled={isDeleting}
              className=" flex items-center justify-center gap-1 rounded-md bg-red-100 px-3 py-2 text-red-500 ring-offset-2 transition-colors hover:bg-red-200 hover:text-red-600 focus:outline-none  focus:ring focus:ring-red-200"
            >
              <RiDeleteBin5Line /> Delete
            </button>
          </div>
        </div>
          {show && <CreateRoomForm roomToedit={room}/>}
      </div>
    </>
  );
};

export default RoomRow;
