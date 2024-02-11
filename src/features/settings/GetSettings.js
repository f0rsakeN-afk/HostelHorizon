import { useQuery } from '@tanstack/react-query';
import { GetSettingsApi } from '../../services/apiSettings';

export function getSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: GetSettingsApi,
  });
  return { isLoading, settings, error };
}
