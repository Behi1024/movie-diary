import { getImageUrl } from "../../services/api.js";

export function JournalCard(movie) {
  const posterUrl = getImageUrl(movie.poster_path);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "Unknown";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "-";

  return `
    <div class="journal-card">
      <div
        class="journal-card__poster"
        style="background-image: url('${posterUrl}')"
      ></div>

      <div class="journal-card__content">
        <h3>${movie.title}</h3>

        <p class="journal-card__meta">
          ${year} • Movie • ⭐ ${rating}
        </p>

        <textarea
          class="journal-card__textarea"
          data-id="${movie.id}"
          placeholder="Write your note here..."
        >${movie.note ?? ""}</textarea>

        <div class="journal-card__actions">
          <button class="btn-save" type="button" data-id="${movie.id}">
            Save Note
          </button>

          <button class="btn-remove" type="button" data-id="${movie.id}">
            Remove
          </button>
        </div>
      </div>
    </div>
  `;
}
