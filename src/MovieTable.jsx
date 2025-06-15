function MovieTable({ movies, editMovie, deleteMovie }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Director</th>
          <th>Actor</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No movies yet.
            </td>
          </tr>
        ) : (
          movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.director}</td>
              <td>{movie.actor}</td>
              <td>
                <button onClick={() => editMovie(index, movie)}>Edit</button>
                <button onClick={() => deleteMovie(index)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default MovieTable;
