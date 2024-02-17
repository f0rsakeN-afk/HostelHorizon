import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '../../services/apiStudents';

export function getStudents() {
  const {
    data: students,
    isLoading,
    
  } = useQuery({
    queryKey: ['students'],
    queryFn: getStudentsApi,
  });
  return { students, isLoading };
}
