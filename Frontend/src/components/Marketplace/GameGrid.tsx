import Games from "./Games";
import { getGames } from "@/api/getGames";
import { PaginationSection } from "./PaginationSection";
import { useContext, useState } from "react";
import ButtonContext, { ButtonTypes } from "@/contexts/ButtonContext";
import { SkeletonGrid } from "./SkeletonGrid";
import { useQuery } from "@tanstack/react-query";

type fetchDataType = {
  id: number;
  cover: {
    id: number;
    url: string;
  };
  first_release_date: number;
  name: string;
  rating: number;
  genres: string;

  summary: string;
};

export default function GameGrid() {
  const { buttonIndex } = useContext(ButtonContext) as ButtonTypes;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);

  const sortByRating = (data: any[]) => {
    return data?.sort(
      (a: fetchDataType, b: fetchDataType) => b.rating - a.rating
    );
  };
  const transformData = (data: any[], buttonIndex: number) => {
    return buttonIndex === 1 ? sortByRating(data) : data;
  };
  const gameData = useQuery({
    queryKey: ["game-query"],
    queryFn: getGames,
    staleTime: 100000,
    select: (data) => transformData(data, buttonIndex),
  });

  
  const { isLoading, data, isFetching }=gameData;

  console.log(data);

  console.log(isLoading, isFetching);

  const games = data;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const slicedData = games?.slice(firstPostIndex, lastPostIndex);
  console.log(slicedData);

  return (
    <div className="flex flex-col w-full pr-24 -ml-10 items-center justify-center">
      {isLoading ? (
        <SkeletonGrid />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-3  gap-5  place-items-center">
          {slicedData?.map(
            (
              element: {
                id: number;
                cover: { url: string };
                name: string;
                rating: number;
                genres: string[];
                release_dates: { date: number }[];
                summary: string;
              },
              index: number
            ) => (
              <Games
                key={index}
                index={element.id}
                url={element.cover.url}
                name={element.name}
                rating={element.rating}
                genres={element?.genres?.map((genre) => genre?.name).join(", ")}
                releaseDate={element?.release_dates[0]?.date}
                summary={element.summary}
                className={"w-4/5 rounded-md border cursor-pointer"}
              />
            )
          )}
        </div>
      )}

      <div className="flex items-center justify-center mt-10 mb-2 w-full ">
        <PaginationSection
          totalPosts={games?.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

{
  /*Fetching the Games via the Api */
}
// const { data:gameData } = useSWR(cachekey, getGames, {
//   onSuccess: (data) =>
//     buttonIndex === 1
//       ? data.sort(
//           (a: { rating: number }, b: { rating: number }) =>
//             b.rating - a.rating
//         )
//       : data,
//   onError: () => console.log("fetch request failed"),
//   suspense: true,
//   revalidateOnMount:true
// })

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     const response = await getGames();
//     if (buttonIndex === 0) {
//       setGameData(
//         response.sort(
//           (a: fetchDataType, b: fetchDataType) =>
//             b.first_release_date - a.first_release_date
//         )
//       );
//     } else if (buttonIndex === 1) {
//       setGameData(
//         response.sort(
//           (a: fetchDataType, b: fetchDataType) => b.rating - a.rating
//         )
//       );
//     } else if (buttonIndex === 2) {
//     }
//   };
//   fetchData();
//   setTimeout(() => {
//     setLoading(false);
//   }, 3000);
// }, [buttonIndex]);
