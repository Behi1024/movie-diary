import { getImageUrl } from "../../services/api.js";

export function MovieCard(movie, isFavourite) {
  const posterUrl = getImageUrl(movie.poster_path);
  const genreText = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Unknown";

  return `
    <article class="movie-card">
      <div
        class="movie-card__poster"
        style="background-image: linear-gradient(180deg, transparent 18%, rgba(0, 0, 0, 0.68) 100%), url('${posterUrl}')"
      >
        <span class="movie-card__poster-title">${movie.title}</span>
      </div>

      <div class="movie-card__content">
        <h3 class="movie-card__title">${movie.title}</h3>

        <p class="movie-card__meta">
          <span>${genreText}</span>
          <span>•</span>
          <span>⭐ ${movie.vote_average?.toFixed(1) ?? "N/A"}</span>
        </p>

        <button
          class="movie-card__button ${isFavourite ? "is-added" : ""}"
          type="button"
          data-movie='${JSON.stringify(movie)}'
          ${isFavourite ? "disabled" : ""}
        >
          ${isFavourite ? "✓ Added" : "♡ Add to Favourites"}
        </button>
      </div>
    </article>
  `;
}
