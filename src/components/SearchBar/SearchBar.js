export function SearchBar() {
  return `
    <section class="search-section">
      <form class="search-bar">
        <input
          class="search-bar__input"
          type="text"
          placeholder="Search movies..."
          aria-label="Search movies"
        />
        <button class="search-bar__button" type="submit">
          Search
        </button>
      </form>
    </section>
  `;
}
