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
    <div className="flex lg:w-1/3 flex-col gap-4 ">
      <Label className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700">Minimum price</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={minPrice}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'minPrice')}
        />
      </Label>
      <Label className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700">Maximum price</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={maxPrice}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'maxPrice')}
        />
      </Label>
      <Label className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700">Minimum capacity</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={minCapacity}
          onBlur={(e) => handleBlur(e, 'minCapacity')}
          disabled={editing}
        />
      </Label>
      <Label>
        <label className="text-base text-gray-700">Maximum capacity</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={maxCapacity}
          disabled={editing}
          onBlur={(e) => handleBlur(e, 'maxCapacity')}
        />
      </Label>
      <Label>
        <label className="text-base text-gray-700">Minimum staying day</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
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
