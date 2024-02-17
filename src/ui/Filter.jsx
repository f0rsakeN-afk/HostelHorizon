import React from 'react';
import { FaAnglesDown } from 'react-icons/fa6';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set('price', value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <div className="flex overflow-hidden rounded-md bg-gray-300 shadow-xl dark:bg-gray-800">
        <button
          className=" justicy-center flex items-center gap-1 px-3 py-2 text-base text-gray-700 outline-none hover:bg-indigo-700 hover:text-gray-200 dark:text-gray-200  "
          onClick={() => handleClick('all')}
        >
          All
        </button>
        <button
          className=" justicy-center flex items-center gap-1 px-3 py-2 text-base text-gray-700 outline-none hover:bg-indigo-700 hover:text-gray-200 dark:text-gray-200  "
          onClick={() => handleClick('price-dec')}
        >
          Price
          <FaAnglesDown />
        </button>
        <button
          className=" justicy-center flex items-center gap-1 px-3 py-2 text-base text-gray-700 outline-none hover:bg-indigo-700 hover:text-gray-200 dark:text-gray-200  "
          onClick={() => handleClick('price-inc')}
        >
          Price
          <FaAngleDoubleUp />
        </button>
      </div>
    </div>
  );
}

export default Filter;
