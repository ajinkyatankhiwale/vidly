import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Like from "../components/common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
    tableHeaders: ["Title", "Genre", "No. In Stock", "Daily Rental Rate", " "]
  };

  handleDeleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleClickLike = movie => {
    console.log("Click Event Fired");
    console.log(movie);
  };

  render() {
    const getHeader = (
      <thead>
        <tr>
          {this.state.tableHeaders.map(tableHeader => (
            <th key={tableHeader}>{tableHeader}</th>
          ))}
        </tr>
      </thead>
    );

    const getBody = (
      <tbody>
        {this.state.movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like clickLike={() => this.handleClickLike(movie)} />
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
          {this.state.movies.length === 0
            ? "No movies in the database"
            : this.state.movies.length + " movies in the database"}
        </span>
        <table className="table table-hover">
          {getHeader}
          {getBody}
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
