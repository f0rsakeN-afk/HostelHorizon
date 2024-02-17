import { useQuery } from '@tanstack/react-query';
import { getBookingsApi } from '../../services/apiBookings';

export function getBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookingsApi,
  });
  return { isLoading, bookings };
}
