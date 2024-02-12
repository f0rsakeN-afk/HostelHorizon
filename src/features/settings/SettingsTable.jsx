import React from 'react';
import { getSettings } from './GetSettings';
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
  if (settingsLoading) return <Spinner />;

  return (
    <div className="flex w-1/3 flex-col gap-4 ">
      <section className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700">Minimum price</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={minPrice}
        />
      </section>
      <section className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700">Maximum price</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={maxPrice}
        />
      </section>
      <section className="flex flex-col gap-1 ">
        <label className="text-base text-gray-700">Minimum capacity</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={minCapacity}
        />
      </section>
      <Label>
        <label className="text-base text-gray-700">Maximum capacity</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={maxCapacity}
        />
      </Label>
      <Label>
        <label className="text-base text-gray-700">Minimum staying day</label>
        <input
          type="number"
          className="rounded-md bg-gray-100 p-2 outline-none "
          defaultValue={minStayingDay}
        />
      </Label>
    </div>
  );
}

const Label = ({ children }) => {
  return <label className="flex flex-col gap-1">{children}</label>;
};
export default SettingsTable;
