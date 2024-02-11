import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createRoom, editRoom } from '../../services/apiRooms';

const CreateRoomForm = () => {
  const { handleSubmit, register, formState, reset } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;

  const { isLoading: isCreating, mutate: create } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success('Room successfully created');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { isLoading: isEditing, mutate: edit } = useMutation({
    mutationFn: () => editRoom(),
    onSuccess: () => {
      toast.success('Room successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    create({ ...data, image: data.image[0] });
    console.log(data);
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className="bg-purple-100 px-[25rem] py-8">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="items-left m-auto flex flex-col justify-center gap-y-4"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-gray-700"
            error={errors?.name?.message}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md  bg-gray-100 p-2 outline-none focus:ring focus:ring-gray-100"
            placeholder="Enter room name"
            {...register('name', { required: 'This field is required' })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-gray-700"
            error={errors?.maxCapacity?.message}
          >
            Max capacity
          </label>
          <input
            type="text"
            id="maxCapacity"
            placeholder="Enter max capacity"
            className="rounded-md  bg-gray-100 p-2 outline-none focus:ring focus:ring-gray-100"
            {...register('maxCapacity', { required: 'This field is required' })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-gray-700"
            error={errors?.price?.message}
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Enter the price"
            className="rounded-md  bg-gray-100 p-2 outline-none focus:ring focus:ring-gray-100"
            {...register('price', { required: 'This field is required' })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-gray-700"
            error={errors?.description?.message}
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter description"
            className="rounded-md  bg-gray-100 p-2 outline-none focus:ring focus:ring-gray-100"
            {...register('description', {
              required: 'This  field is required',
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-gray-700"
            error={errors?.image?.message}
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            disabled={isCreating}
            accept="image/*"
            {...register('image', {
              required: 'This field is required',
            })}
          />
        </div>
        <button className>xyz</button>
      </form>
    </div>
  );
};

export default CreateRoomForm;
