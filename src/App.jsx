import { useState } from "react";
import MovieForm from "./MovieForm";
import MovieTable from "./MovieTable";

import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  const editMovie = (index, updatedMovie) => {
    const updated = [...movies];
    updated[index] = updatedMovie;
    setMovies(updated);
  };

  const deleteMovie = (index) => {
    setMovies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <MovieForm addMovie={addMovie} />
      <MovieTable
        movies={movies}
        editMovie={editMovie}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
