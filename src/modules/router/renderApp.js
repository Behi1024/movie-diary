import { appState } from "../state/appState.js";
import {
  renderHomePage,
  attachHomeEvents,
} from "../../pages/home/renderHomePage.js";
import {
  renderJournalPage,
  attachJournalEvents,
} from "../../pages/journal/renderJournalPage.js";

export function renderApp() {
  const app = document.querySelector("#app");

  if (appState.currentPage === "home") {
    app.innerHTML = renderHomePage();
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
    homeLink.addEventListener("click", (event) => {
      event.preventDefault();
      appState.currentPage = "home";
      renderApp();
    });
  }

  if (journalLink) {
    journalLink.addEventListener("click", (event) => {
      event.preventDefault();
      appState.currentPage = "journal";
      renderApp();
    });
  }
}
