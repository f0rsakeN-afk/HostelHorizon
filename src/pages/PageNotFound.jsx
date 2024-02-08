import React from 'react';
import { useMoveBack } from '../hooks/useMoveBack';

const PageNotFound = () => {
  const goBack = useMoveBack();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="py-2 text-xl text-gray-700">
        The page you are looking for could not be found.
      </h1>
      <button
        onClick={goBack}
        className="rounded-xl bg-blue-400 px-3 py-2  text-xl text-gray-700 hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
