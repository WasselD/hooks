import { useState } from "react";
import "./App.css";

import MovieList from "./components/ListMovies/MovieList";
import AddMovie from "./components/addMovies/AddMovie";
import { moviesData } from "./data/moviesData";

import FilterByTitle from "./components/addFilter/FilterByTitle";
import FilterByRate from "./components/filterByRate/FilterByRate";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const addFilm = (newMovie) => {
    setMovies([newMovie,...movies]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase().trim());

    const matchRate = searchRate === 0 || Number(movie.rate) === Number(searchRate);

    return matchTitle && matchRate;
  });

  return (
    <div className="app">
      <div className="app-header">
        <h1>TunFlix</h1>
        <p>Your personal movie collection</p>
      </div>

      <div className="controls-row">
        <AddMovie addFilm={addFilm} />

        <FilterByTitle
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
        />

        <FilterByRate
          searchRate={searchRate}
          setSearchRate={setSearchRate}
        />
      </div>

      <div className="results-count">
        {filteredMovies.length === movies.length ? (
          <>Showing <strong>{filteredMovies.length}</strong> movies</>
        ) : (
          <><strong>{filteredMovies.length}</strong> of {movies.length} movies</>
        )}
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;