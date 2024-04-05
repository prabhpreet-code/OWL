import { URLEndpoint } from "./getGames";

export const getRecommendations = async (
  id: number[] | string[] | number | string | undefined
) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  console.log(id);
  const response = await fetch(
    `${URLEndpoint}getRecommendations?token=3y0clekizk08e1uhqx8uq8gvm1xhs1&game_id=${id}`,
    requestOptions
  );

  const result = await response.json();

  return result;
};
