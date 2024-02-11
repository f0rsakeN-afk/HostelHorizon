import { useQueryClient, useMutation } from '@tanstack/react-query';
import { createRoomApi } from '../../services/apiRooms';
import toast from 'react-hot-toast';


export function CreateRoom() {

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: create } = useMutation({
    mutationFn: createRoomApi,
    onSuccess: () => {
      toast.success('Room successfully created');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, create };
}
