export function Header(currentPage) {
  return `
    <header class="header">
      <div class="header__brand">
        <span>🎬</span>
        <span>Movie Diary</span>
      </div>

      <nav class="header__nav">
        <a href="#"
           class="header__link header__link--home ${
             currentPage === "home" ? "header__link--active" : ""
           }">
           Home
        </a>

        <a href="#"
           class="header__link header__link--journal ${
             currentPage === "journal" ? "header__link--active" : ""
           }">
           Journal
        </a>
      </nav>
    </header>
  `;
}
