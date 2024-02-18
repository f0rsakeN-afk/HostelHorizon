import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '../../services/apiStudents';

export function getStudents() {
  const {
    data: students,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });
  return { students, isLoading };
}
