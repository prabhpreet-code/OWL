import { URLEndpoint } from "./getGames";

export const getRecommendations = async (id: number[] | string[] | number |string | undefined) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };
  

  console.log(id);
  const response = await fetch(
    `${URLEndpoint}getRecommendations?token=v6pf2i3kcry3wryormywe1r5mzghxm&game_id=${id}`,
    requestOptions
  );

  const result = await response.json();
  console.log(result);
  return result;
};
