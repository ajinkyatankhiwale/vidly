import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Like from "../components/common/like";
import Pagination from "./common/pagination";
import { getRecordsOnPage } from "../util/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    tableHeaders: ["Title", "Genre", "No. In Stock", "Daily Rental Rate", " "],
    pageSize: 4,
    currentPage: 1
  };

  handleDeleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleClickLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleOnPageClick = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      tableHeaders
    } = this.state;

    const movies = getRecordsOnPage(allMovies, currentPage, pageSize);

    const getTableHeader = (
      <thead>
        <tr>
          {tableHeaders.map(tableHeader => (
            <th key={tableHeader}>{tableHeader}</th>
          ))}
        </tr>
      </thead>
    );

    const getTableBody = (
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                movie={movie}
                clickLike={() => this.handleClickLike(movie)}
              />
            </td>
            <td>
              <button
                onClick={() => this.handleDeleteMovie(movie)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );

    return (
      <React.Fragment>
        <span>
          {allMovies.length === 0
            ? "No movies in the database"
            : allMovies.length + " movie/s in the database"}
        </span>
        <table className="table table-hover">
          {getTableHeader}
          {getTableBody}
        </table>
        <Pagination
          totalNoOfRecords={allMovies.length}
          pageSize={pageSize}
          onPageClick={this.handleOnPageClick}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
