import React from 'react';
import { getSettings } from './GetSettings';
import Spinner from '../../ui/Spinner';

function SettingsTable() {
  const { isLoading: settingsLoading, settingData } = getSettings();
  if (settingsLoading) return <Spinner />;

  return (
    <div>
      <section>
        <input type="number" defaultValue={minPrice} />
      </section>
    </div>
  );
}

export default SettingsTable;
