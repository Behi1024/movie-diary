export function Header() {
  return `
    <header class="header">
      <div class="header__brand">
        <span class="header__icon">🎬</span>
        <span class="header__title">Movie Diary</span>
      </div>

      <nav class="header__nav">
        <a href="#" class="header__link header__link--home header__link--active">Home</a>
        <a href="#" class="header__link header__link--journal">Journal</a>
        <button class="header__theme-button" type="button" aria-label="Toggle theme">
          ◐
        </button>
      </nav>
    </header>
  `;
}
