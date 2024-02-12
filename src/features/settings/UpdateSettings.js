import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateSettingsApi } from '../../services/apiSettings';
import toast from 'react-hot-toast';

export function EditSettings() {
  const queryClient = useQueryClient();
  const { isLoading: editing, mutate: editSettings } = useMutation({
    mutationFn:UpdateSettingsApi,
    onSuccess: () => {
      toast.success('Settings updated successfully');
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editing, editSettings };
}
