import { URLEndpoint } from "./getGames";

export const getGamesById = async (id: number | string | undefined) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${URLEndpoint}getInfo?token=v6pf2i3kcry3wryormywe1r5mzghxm&game_id=${id}`,
    requestOptions
  );

  const result = await response.json();
  console.log(result);
 
  return result;
};
