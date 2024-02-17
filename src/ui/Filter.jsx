import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options[0].value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <div className="flex overflow-hidden rounded-md bg-gray-300 shadow-xl dark:bg-gray-800">
        {options.map((option) => (
          <button
            className={` justicy-center flex items-center gap-1 px-3 py-2 text-base text-gray-700 outline-none hover:bg-indigo-700 hover:text-gray-200 dark:text-gray-200 ${option.value === currentFilter ? `bg-indigo-700` : ''} `}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
