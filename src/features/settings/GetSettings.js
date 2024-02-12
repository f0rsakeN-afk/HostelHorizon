import { useQuery } from '@tanstack/react-query';
import { GetSettingsApi } from '../../services/apiSettings';

export function getSettings() {
  const {
    isLoading,
    data:settingData,
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: GetSettingsApi,
  });
  return { isLoading, settingData,error};
}
