import React from "react";
import Like from "../components/common/like";

const MoviesTable = props => {
  const {
    tableHeaders,
    movies,
    onLikeClick,
    onMovieDelete,
    onColumnSort
  } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {tableHeaders.map(tableHeader => (
            <th
              onClick={() => onColumnSort(tableHeader["key"])}
              key={tableHeader["key"]}
            >
              {tableHeader["value"]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like movie={movie} onLikeClick={() => onLikeClick(movie)} />
            </td>
            <td>
              <button
                onClick={() => onMovieDelete(movie)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
