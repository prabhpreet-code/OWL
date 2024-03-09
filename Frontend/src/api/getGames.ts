export const URLEndpoint = "http://localhost:8080/";

export const getGames = async () => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${URLEndpoint}getGames?token=v6pf2i3kcry3wryormywe1r5mzghxm`,
    requestOptions
  );

  const result = await response.json();
  return result;
};
