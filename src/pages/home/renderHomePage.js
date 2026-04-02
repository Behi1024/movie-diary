import { Header } from "../../components/Header/Header.js";
import { Hero } from "../../components/Hero/Hero.js";
import { SearchBar } from "../../components/SearchBar/SearchBar.js";
import { MovieCard } from "../../components/MovieCard/MovieCard.js";
import { appState } from "../../modules/state/appState.js";
import { addToFavourites } from "../../modules/state/favourites.js";
import { renderApp } from "../../modules/router/renderApp.js";
import { getPopularMovies } from "../../services/api.js";

export async function renderHomePage() {
  let moviesMarkup = "";
  let sectionTitle = "🔥 Popular Movies";

  try {
    const movies = await getPopularMovies();

    moviesMarkup = movies
      .map((movie) => {
        const isFavourite = appState.favourites.some(
          (fav) => fav.id === movie.id,
        );

        return MovieCard(movie, isFavourite);
      })
      .join("");
  } catch (error) {
    sectionTitle = "⚠️ Could not load movies";
    moviesMarkup = `
      <div class="movies-error">
        <p>Something went wrong while loading movie data.</p>
      </div>
    `;
  }

  return `
    <div class="page-shell">
      <div class="page-frame">
        ${Header("home")}

        <main class="home-page">
          ${Hero()}
          ${SearchBar()}

          <section class="movies-section">
            <div class="section-heading">
              <h2>${sectionTitle}</h2>
            </div>

            <div class="movies-grid">
              ${moviesMarkup}
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
  console.log("attachHomeEvents is running");

  const buttons = document.querySelectorAll(".movie-card__button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const movieJson = button.dataset.movie;

      if (!movieJson) return;

      const movie = JSON.parse(movieJson);

      addToFavourites(movie);
      renderApp();
    });
  });

  const form = document.querySelector(".search-bar");
  const input = document.querySelector(".search-bar__input");

  if (form && input) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const query = input.value.trim();

      if (!query) return;

      console.log("Search:", query);
    });
  }
}
