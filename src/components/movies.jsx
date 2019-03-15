import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getRecordsOnPage } from "../util/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: {},
    genre: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: null,
    sortedColumn: { column: "title", order: "asc" }
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genre: [{ _id: "", name: "All Movies" }, ...getGenres()]
    });
  }

  handleMovieDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLikeClick = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleOnPageClick = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleColumnSort = sortedColumn => {
    this.setState({ sortedColumn });
  };

  handlePagedData = () => {
    const {
      movies: allMovies,
      currentPage,
      currentGenre,
      pageSize,
      sortedColumn
    } = this.state;

    const genreMovies =
      currentGenre && currentGenre._id
        ? allMovies.filter(movie => movie.genre._id === currentGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      genreMovies,
      [sortedColumn.column],
      [sortedColumn.order]
    );

    const movies = getRecordsOnPage(sortedMovies, currentPage, pageSize);

    return { genreMovies, movies };
  };

  render() {
    const { genre, pageSize, sortedColumn } = this.state;

    const { genreMovies, movies } = this.handlePagedData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3 m-2">
            <ListGroup
              listGroupKey="_id"
              listGroupValue="name"
              items={genre}
              onItemSelect={this.handleGenreSelect}
              currentItem={this.state.currentGenre}
            />
          </div>
          <div className="col">
            <MoviesTable
              movies={movies}
              sortedColumn={sortedColumn}
              onLikeClick={this.handleLikeClick}
              onMovieDelete={this.handleMovieDelete}
              onColumnSort={this.handleColumnSort}
            />
            <Pagination
              totalNoOfRecords={genreMovies.length}
              pageSize={pageSize}
              onPageClick={this.handleOnPageClick}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
