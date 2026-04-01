export function MovieCard(movie) {
  return `
    <article class="movie-card">
      <div
        class="movie-card__poster"
        style="background-image: linear-gradient(180deg, transparent 18%, rgba(0, 0, 0, 0.68) 100%), url('${movie.poster}')"
      >
        <span class="movie-card__poster-title">${movie.title}</span>
      </div>

      <div class="movie-card__content">
        <h3 class="movie-card__title">${movie.title}</h3>

        <p class="movie-card__meta">
          <span>${movie.year}</span>
          <span>•</span>
          <span>${movie.genre}</span>
        </p>

        <button class="movie-card__button" type="button" data-id="${movie.id}">
          ♡ Add to Favourites
        </button>
      </div>
    </article>
  `;
}
