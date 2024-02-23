import React from 'react';
import { useForm } from 'react-hook-form';
import { CreateRoom } from './CreateRoom';
import { EditRoom } from './EditRoom';

const CreateRoomForm = ({ roomToEdit = {} }) => {
  const { isCreating, create } = CreateRoom();
  const { isEditing, edit } = EditRoom();
  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : '',
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      edit(
        { newRoom: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        },
      );
    } else {
      create(
        { ...data, image: data.image[0] },
        {
          onSuccess: (data) => reset(),
        },
      );
    }
  }
  function onError(errors) {
    console.log(errors);
  }

  const isWorking = isCreating || isEditing;

  return (
    <div className=" px-2 py-8 lg:px-[25rem]">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="items-left m-auto flex flex-col justify-center gap-y-4"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className=" text-gray-700 dark:text-gray-200"
            error={errors?.name?.message}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md  bg-gray-100 p-2 text-gray-700 outline-none focus:ring focus:ring-gray-100 dark:bg-gray-500 dark:text-gray-200"
            placeholder="Enter room name"
            {...register('name', { required: 'This field is required' })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className=" text-gray-700 dark:text-gray-200"
            error={errors?.maxCapacity?.message}
          >
            Max capacity
          </label>
          <input
            type="text"
            id="maxCapacity"
            placeholder="Enter max capacity"
            className="rounded-md  bg-gray-100 p-2 text-gray-700 outline-none focus:ring focus:ring-gray-100 dark:bg-gray-500 dark:text-gray-200"
            {...register('maxCapacity', { required: 'This field is required' })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className=" text-gray-700 dark:text-gray-200"
            error={errors?.price?.message}
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Enter the price"
            className="rounded-md  bg-gray-100 p-2 text-gray-700 outline-none focus:ring focus:ring-gray-100 dark:bg-gray-500 dark:text-gray-200"
            {...register('price', { required: 'This field is required' })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className=" text-gray-700 dark:text-gray-200"
            error={errors?.description?.message}
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter description"
            className="rounded-md  bg-gray-100 p-2 text-gray-700 outline-none focus:ring focus:ring-gray-100 dark:bg-gray-500 dark:text-gray-200"
            {...register('description', {
              required: 'This  field is required',
            })}
          />
        </div>

        {isEditSession ? (
          ''
        ) : (
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className=" text-gray-700 dark:text-gray-200"
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
        )}
        <button
          className="rounded-lg  bg-[#4338ca] px-4 py-2 text-xl font-semibold tracking-wide   text-gray-800 ring-offset-2 transition-all duration-300 ease-linear hover:text-2xl focus:outline-none focus:ring focus:ring-[#4338ca]  dark:text-gray-200 "
          disabled={isWorking}
        >
          {isEditSession ? `Edit room` : 'Add room'}
        </button>
      </form>
    </div>
  );
};

export default CreateRoomForm;
