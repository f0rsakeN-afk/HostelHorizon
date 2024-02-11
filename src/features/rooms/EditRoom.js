import { useQueryClient,useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { editRoomApi } from '../../services/apiRooms';

export function EditRoom() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: edit } = useMutation({
    mutationFn: ({ newRoom, id }) => editRoomApi(newRoom, id),
    onSuccess: () => {
      toast.success('Room successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, edit };
}
