import { getGamesById } from "@/api/getGameById";
import { useQuery } from "react-query";

export function useGetDetails(id: string | undefined) {
  const { data, isLoading } = useQuery(
    ["game-details", { game_id: id }],
    () => getGamesById(id),
    {
      staleTime: 10000,
    }
  );
  // console.log(data);
  return {
    data,
    isLoading,
  };
}
