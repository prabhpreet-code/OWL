import { URLEndpoint } from "./getGames";

export const getVideoById = async (id: number | string | undefined) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${URLEndpoint}getVideos?token=3y0clekizk08e1uhqx8uq8gvm1xhs1&id=${id}`,
    requestOptions
  );

  const result = await response.json();

  return result;
};
