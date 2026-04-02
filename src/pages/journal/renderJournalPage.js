import { Header } from "../../components/Header/Header.js";
import { JournalCard } from "../../components/JournalCard/JournalCard.js";
import { EmptyState } from "../../components/EmptyState/EmptyState.js";
import { appState } from "../../modules/state/appState.js";
import { renderApp } from "../../modules/router/renderApp.js";
import {
  removeFromFavourites,
  updateFavouriteNote,
} from "../../modules/state/favourites.js";

export function renderJournalPage() {
  const content =
    appState.favourites.length === 0
      ? EmptyState()
      : appState.favourites.map((movie) => JournalCard(movie)).join("");

  return `
    <div class="page-shell">
      <div class="page-frame">
        ${Header("journal")}

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
  const saveButtons = document.querySelectorAll(".btn-save");
  const browseButton = document.querySelector(".empty-state__button");
  if (browseButton) {
    browseButton.addEventListener("click", () => {
      appState.currentPage = "home";
      renderApp();
    });
  }

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      removeFromFavourites(id);
      renderApp();
    });
  });

  saveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      const textarea = document.querySelector(
        `.journal-card__textarea[data-id="${id}"]`,
      );

      if (!textarea) return;

      updateFavouriteNote(id, textarea.value);

      // 🔥 UI feedback
      const originalText = button.textContent;

      button.textContent = "Saved ✔️";
      button.style.background = "#22c55e";
      button.style.color = "#fff";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
        button.style.color = "";
      }, 1500);
    });
  });
}
