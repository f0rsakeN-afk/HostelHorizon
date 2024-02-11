import { useQuery } from "@tanstack/react-query";
import { getRoomsApi } from "../../services/apiRooms";

export function getRooms() {
    const {
        isLoading,
        data: rooms,
        error,
      } = useQuery({
        queryKey: ['rooms'],
        queryFn: getRoomsApi,
      });
    
    return{isLoading,rooms,error}
}