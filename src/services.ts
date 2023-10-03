const starWarsAPI = "https://swapi.dev/api/";

export async function getData(setState, endpoint) {
  const response = await fetch(`${starWarsAPI}/${endpoint}/`);
  const data = await response.json();
  setState(data.results);
}

export async function getMovies(setState) {
  return await getData(setState, "films");
}
export async function getPeople(setState) {
  return await getData(setState, "people");
}

export async function getPlanets(setState) {
  return await getData(setState, "planets");
}
export async function getSpecies(setState) {
  return await getData(setState, "species");
}

export async function getShips(setState) {
  return await getData(setState, "starships");
}
