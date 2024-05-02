import { URLEndpoint } from "./getGames";

export const getPlatforms = async (index: number[] | string[] | undefined) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${URLEndpoint}getPlatform?token=3y0clekizk08e1uhqx8uq8gvm1xhs1&platforms=${index}`,
    requestOptions
  );

  const result = await response.json();

  return result;
};
