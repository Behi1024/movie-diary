import { appState } from "./appState.js";

export function addToFavourites(movie) {
  const exists = appState.favourites.find((m) => m.id === movie.id);

  if (!exists) {
    appState.favourites.push(movie);
  }
}

export function removeFromFavourites(id) {
  appState.favourites = appState.favourites.filter((m) => m.id !== id);
}
