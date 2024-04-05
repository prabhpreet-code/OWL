import { URLEndpoint } from "./getGames";

export const getGamesById = async (id: number | string | undefined) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${URLEndpoint}getInfo?token=3y0clekizk08e1uhqx8uq8gvm1xhs1&game_id=${id}`,
    requestOptions
  );

  const result = await response.json();

  return result;
};
