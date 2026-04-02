import { appState } from "./appState.js";
import { saveToStorage } from "../storage/storage.js";

export function addToFavourites(movie) {
  const exists = appState.favourites.find((item) => item.id === movie.id);

  if (exists) {
    return;
  }

  appState.favourites.push({
    ...movie,
    note: movie.note ?? "",
  });

  saveToStorage(appState.favourites);
}

export function removeFromFavourites(id) {
  appState.favourites = appState.favourites.filter((item) => item.id !== id);

  saveToStorage(appState.favourites);
}

export function updateFavouriteNote(id, note) {
  const movie = appState.favourites.find((item) => item.id === id);

  if (!movie) {
    return;
  }

  movie.note = note;

  saveToStorage(appState.favourites);
}
