import React from 'react';
import { Form, useForm } from 'react-hook-form';

const CreateRoomForm = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
      </form>
    </div>
  );
};

export default CreateRoomForm;
