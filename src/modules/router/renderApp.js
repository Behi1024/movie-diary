import { appState } from "../state/appState.js";
import {
  renderHomePage,
  attachHomeEvents,
} from "../../pages/home/renderHomePage.js";
import {
  renderJournalPage,
  attachJournalEvents,
} from "../../pages/journal/renderJournalPage.js";
import { loadFromStorage } from "../storage/storage.js";

let isStorageLoaded = false;

export async function renderApp() {
  const app = document.querySelector("#app");

  if (!isStorageLoaded) {
    const savedData = loadFromStorage();

    if (savedData) {
      appState.favourites = savedData;
    }

    isStorageLoaded = true;
  }

  if (appState.currentPage === "home") {
    app.innerHTML = await renderHomePage();
    attachNavigationEvents();
    attachHomeEvents();
    return;
  }

  if (appState.currentPage === "journal") {
    app.innerHTML = renderJournalPage();
    attachNavigationEvents();
    attachJournalEvents();
  }
}

function attachNavigationEvents() {
  const homeLink = document.querySelector(".header__link--home");
  const journalLink = document.querySelector(".header__link--journal");

  if (homeLink) {
    homeLink.addEventListener("click", async (event) => {
      event.preventDefault();
      appState.currentPage = "home";
      await renderApp();
    });
  }

  if (journalLink) {
    journalLink.addEventListener("click", async (event) => {
      event.preventDefault();
      appState.currentPage = "journal";
      await renderApp();
    });
  }
}
