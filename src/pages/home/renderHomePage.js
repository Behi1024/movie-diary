import { Header } from "../../components/Header/Header.js";
import { Hero } from "../../components/Hero/Hero.js";
import { SearchBar } from "../../components/SearchBar/SearchBar.js";
import { MovieCard } from "../../components/MovieCard/MovieCard.js";
import { movies } from "../../modules/state/movies.js";
import { addToFavourites } from "../../modules/state/favourites.js";
import { renderApp } from "../../modules/router/renderApp.js";

export function renderHomePage() {
  const movieCards = movies.map((movie) => MovieCard(movie)).join("");

  return `
    <div class="page-shell">
      <div class="page-frame">
        ${Header()}

        <main class="home-page">
          ${Hero()}
          ${SearchBar()}

          <section class="movies-section">
            <div class="section-heading">
              <h2>🔥 Popular Movies</h2>
            </div>

            <div class="movies-grid">
              ${movieCards}
            </div>
          </section>
        </main>

        <footer class="footer">
          <p>Movie Diary Project © 2025</p>
        </footer>
      </div>
    </div>
  `;
}

export function attachHomeEvents() {
  const buttons = document.querySelectorAll(".movie-card__button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const movie = movies.find((item) => item.id === id);

      if (!movie) {
        return;
      }

      addToFavourites(movie);
      renderApp();
    });
  });
}
