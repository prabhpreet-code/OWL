export const URLEndpoint = "http://localhost:8080/api/";

export const getGames = async () => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `${URLEndpoint}getGames?token=3y0clekizk08e1uhqx8uq8gvm1xhs1`,
    requestOptions
  );

  const result = await response.json();
  console.log(result);
  return result;
};
