import React from 'react';
import { useForm } from 'react-hook-form';
import { AddStudent } from './AddStudents';

function CreateStudentsForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { isCreating, create } = AddStudent();

  const onSubmit = (data) => {
    create([data]);
    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="items-left m-auto flex flex-col justify-center gap-y-4 lg:w-2/5">
          <div className="flex  flex-col gap-1">
            <label className="text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'This field is required' })}
              className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none focus:ring focus:ring-gray-100 dark:bg-gray-500 dark:text-gray-200"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
         
          <div className="flex  flex-col gap-1">
            <label className="text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="text"
              id="email"
              {...register('email', { required: 'This field is required' })}
              className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none focus:ring focus:ring-gray-100 dark:bg-gray-500 dark:text-gray-200"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <button
            disabled={isCreating}
            className="rounded-lg bg-[#4338ca] px-4 py-2 text-xl font-semibold tracking-wide text-gray-200 ring-offset-2 transition-all duration-300 ease-linear hover:text-2xl focus:outline-none focus:ring focus:ring-[#4338ca] dark:text-gray-200"
          >
         Add student
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateStudentsForm;
