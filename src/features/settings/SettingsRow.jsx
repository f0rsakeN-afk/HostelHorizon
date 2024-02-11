import React from 'react';
import { getSettings } from './GetSettings';

function SettingsRow() {
  const { isLoading, settings, error } = getSettings();
  return <div>h</div>;
}

export default SettingsRow;
