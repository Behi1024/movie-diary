const API_KEY = "9b6585c748c031cfa875f834429c0215";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies.");
  }

  const data = await response.json();
  return data.results;
}

export function getImageUrl(path) {
  if (!path) {
    return "";
  }

  return `${IMAGE_BASE_URL}${path}`;
}

export async function searchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );

  const data = await response.json();
  return data.results;
}
