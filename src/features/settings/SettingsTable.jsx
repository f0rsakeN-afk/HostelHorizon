import React from 'react';
import { getSettings } from './GetSettings';
import { EditSettings } from './UpdateSettings';
import Spinner from '../../ui/Spinner';

function SettingsTable() {
  const {
    isLoading: settingsLoading,
    settingData: {
      minPrice,
      maxPrice,
      minCapacity,
      maxCapacity,
      minStayingDay,
    } = {},
  } = getSettings();

  const { editing, editSettings } = EditSettings();
  if (settingsLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;

    if (!value) return;
    editSettings({ [field]: value });
  }

  return (
    <div className="flex flex-col gap-4 lg:w-1/3 ">
      <Label className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700 dark:text-gray-200">
          Minimum price
        </label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none dark:bg-gray-500 dark:text-gray-300 "
          defaultValue={minPrice}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'minPrice')}
        />
      </Label>
      <Label className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700 dark:text-gray-200">
          Maximum price
        </label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none dark:bg-gray-500 dark:text-gray-300 "
          defaultValue={maxPrice}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'maxPrice')}
        />
      </Label>
      <Label className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700 dark:text-gray-200">
          Minimum capacity
        </label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none dark:bg-gray-500 dark:text-gray-300 "
          defaultValue={minCapacity}
          onBlur={(e) => handleBlur(e, 'minCapacity')}
          disabled={editing}
        />
      </Label>
      <Label>
        <label className="text-base text-gray-700 dark:text-gray-200">
          Maximum capacity
        </label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none dark:bg-gray-500 dark:text-gray-300 "
          defaultValue={maxCapacity}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'maxCapacity')}
        />
      </Label>
      <Label>
        <label className="text-base text-gray-700 dark:text-gray-200">
          Minimum staying day
        </label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 text-gray-700 outline-none dark:bg-gray-500 dark:text-gray-300 "
          defaultValue={minStayingDay}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'minStayingDay')}
        />
      </Label>
    </div>
  );
}

const Label = ({ children }) => {
  return <section className="flex flex-col gap-1">{children}</section>;
};

export default SettingsTable;
