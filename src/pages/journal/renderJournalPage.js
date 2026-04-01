import { Header } from "../../components/Header/Header.js";
import { JournalCard } from "../../components/JournalCard/JournalCard.js";
import { EmptyState } from "../../components/EmptyState/EmptyState.js";
import { appState } from "../../modules/state/appState.js";
import { removeFromFavourites } from "../../modules/state/favourites.js";
import { renderApp } from "../../modules/router/renderApp.js";

export function renderJournalPage() {
  const content =
    appState.favourites.length === 0
      ? EmptyState()
      : appState.favourites.map((movie) => JournalCard(movie)).join("");

  return `
    <div class="page-shell">
      <div class="page-frame">
        ${Header()}

        <main class="journal-page">
          <h1 class="journal-title">📒 My Journal</h1>
          <p class="journal-subtitle">
            Your saved favourites and personal notes.
          </p>

          <div class="journal-list">
            ${content}
          </div>
        </main>

        <footer class="footer">
          <p>Movie Diary Project © 2025</p>
        </footer>
      </div>
    </div>
  `;
}

export function attachJournalEvents() {
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      removeFromFavourites(id);
      renderApp();
    });
  });
}
