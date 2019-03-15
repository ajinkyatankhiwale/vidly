import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "../components/common/like";

import Table from "./common/table";

class MoviesTable extends Component {
  render() {
    const { movies, sortedColumn, onColumnSort } = this.props;

    const tableHeaders = [
      {
        key: "title",
        value: "Title",
        content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      },
      { key: "genre.name", value: "Genre" },
      { key: "numberInStock", value: "No. In Stock" },
      { key: "dailyRentalRate", value: "Daily Rental Rate" },
      {
        key: "like",
        content: movie => (
          <Like
            movie={movie}
            onLikeClick={() => this.props.onLikeClick(movie)}
          />
        )
      },
      {
        key: "delete",
        content: movie => (
          <button
            onClick={() => this.props.onMovieDelete(movie)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )
      }
    ];

    return (
      <Table
        data={movies}
        tableHeaders={tableHeaders}
        sortedColumn={sortedColumn}
        onColumnSort={onColumnSort}
      />
    );
  }
}

export default MoviesTable;
