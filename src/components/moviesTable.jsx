import React, { Component } from "react";
import Like from "../components/common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  render() {
    const {
      movies,
      onLikeClick,
      onMovieDelete,
      sortedColumn,
      onColumnSort
    } = this.props;

    const tableHeaders = [
      { key: "title", value: "Title" },
      { key: "genre.name", value: "Genre" },
      { key: "numberInStock", value: "No. In Stock" },
      { key: "dailyRentalRate", value: "Daily Rental Rate" },
      { key: "", value: "" }
    ];

    return (
      <table className="table table-hover">
        <TableHeader
          sortedColumn={sortedColumn}
          tableHeaders={tableHeaders}
          onColumnSort={onColumnSort}
        />
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
  }
}

export default MoviesTable;
