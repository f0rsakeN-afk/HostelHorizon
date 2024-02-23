import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addStudentsApi } from '../../services/apiStudents';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

export function AddStudent() {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { isLoading: isCreating, mutate: create } = useMutation({
    mutationFn: addStudentsApi,
    onSuccess: () => {
      toast.success('Student successfully added');
      queryClient.invalidateQueries({
        queryKey: 'students',
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, create };
}
