import React from 'react';
import SettingsTable from '../features/settings/SettingsTable';
import Title from '../ui/Title';

const Settings = () => {
  return (
    <div className="">
     <Title text={`Hostel settings`}/>
      <SettingsTable />
    </div>
  );
};

export default Settings;
