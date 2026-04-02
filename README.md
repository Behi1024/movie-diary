# 🎬 Movie Diary

A simple and clean movie tracking web app built with **Vanilla JavaScript** and a **modular architecture**.

---

## ✨ Features

- 🔍 Discover popular movies (TMDB API)
- ❤️ Add movies to favourites
- 📝 Write personal notes in your journal
- 💾 Data persists using LocalStorage
- 🔄 Smooth navigation between Home and Journal (without page reload)
- ⚡ Dynamic UI updates (buttons, states, interactions)

---

## 🧠 Architecture

This project follows a **modular structure** to keep code clean and maintainable.

```
src/
|-- components/
|   |-- EmptyState/
|   |-- Header/
|   |-- Hero/
|   |-- JournalCard/
|   |-- MovieCard/
|   `-- SearchBar/
|
|-- modules/
|   |-- router/
|   |   `-- renderApp.js
|   |-- state/
|   |   |-- appState.js
|   |   |-- favourites.js
|   |   `-- journal.js
|   `-- storage/
|       `-- storage.js
|
|-- pages/
|   |-- home/
|   |   `-- renderHomePage.js
|   `-- journal/
|       `-- renderJournalPage.js
|
|-- services/
|   `-- api.js
|
|-- main.js
`-- style.css
```

---

## 🚀 Technologies

- Vanilla JavaScript (ES Modules)
- Vite
- TMDB API
- LocalStorage

---

## ⚙️ Setup

### 🔹 Clone the repository (SSH)

```bash
git clone git@github.com:Behi1024/movie-diary.git
```

### 🔹 Go into the project

```bash
cd movie-diary
```

### 🔹 Install dependencies

```bash
npm install
```

### 🔹 Run the project

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

```
VITE_TMDB_API_KEY=your_api_key_here
```

⚠️ This file is ignored via `.gitignore`

---

## 🧪 Notes

- Built without any framework (no React)
- Focus on clean architecture and modular design
- Designed as a learning project for real-world frontend structure

---

## 😄 Fun Fact

Yes… I built this without React 😎
