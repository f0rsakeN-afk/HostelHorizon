import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, useForm, useFormState } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createEditRoom } from '../../services/apiRooms';

const CreateRoomForm = ({ roomToedit = {} }) => {
  const queryClient = useQueryClient();

  const { id: editId, ...editValue } = roomToedit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { errors } = formState;
  const { isLoading: isCreating, mutate: createRoom } = useMutation({
    mutationFn: createEditRoom,
    onSuccess: () => {
      toast.success('Room successfully created');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { isLoading: isEditing, mutate: editRoom } = useMutation({
    mutationFn: ({ newroomData, id }) => createEditRoom({ newroomData, id }),
    onSuccess: () => {
      toast.success('Room successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
    },
  });

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession)
      editRoom({ newroomData: { ...data, image }, id: editId });
    else createRoom({ ...data, image: data.image });
  }

  function onError(errors) {
    console.error(errors);
  }
  const isWorking = isCreating || isEditing;

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
            {...register('image', {
              required: isEditSession ? false : 'This field is required',
            })}
          />
        </div>
        <button disabled={isWorking} className=''>
          {isEditSession ? ` Edit room` : `Add room`}
        </button>
      </form>
    </div>
  );
};

export default CreateRoomForm;
