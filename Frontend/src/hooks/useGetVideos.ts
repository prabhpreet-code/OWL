import { getVideoById } from "@/api/getVideos";
import { useQuery } from "react-query";

export function useGetVideos(id: any) {
  const { data: videoRef, isLoading } = useQuery(
    ["game-video",{ video_id: id }],
    () => getVideoById(id),
    {
      staleTime: 100000,
    }
  );
  return { videoRef, isLoading };
}
