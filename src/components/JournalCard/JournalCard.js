export function JournalCard(movie) {
  return `
    <div class="journal-card">
      <div
        class="journal-card__poster"
        style="background-image: url('${movie.poster}')"
      ></div>

      <div class="journal-card__content">
        <h3>${movie.title}</h3>

        <p class="journal-card__meta">
          ${movie.year} • ${movie.genre} • ⭐ ${movie.rating ?? "-"}
        </p>

        <p class="journal-card__description">
          ${movie.note ?? ""}
        </p>

        <textarea class="journal-card__textarea">${movie.note ?? ""}</textarea>

        <div class="journal-card__actions">
          <button class="btn-save" type="button">Save Note</button>
          <button class="btn-remove" type="button" data-id="${movie.id}">Remove</button>
        </div>
      </div>
    </div>
  `;
}
